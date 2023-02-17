import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FurnitureDimension from "../utils/FurnitureDimension";
import BookDimension from "../utils/BookDimension";
import DvdDimension from "../utils/DvdDimension";
import ProductAddControl from "../utils/ProductAddControl";
import { createProduct } from "../../requests/productStaff";
import Notification from "../utils/Notification";

function Product() {

    const navigation = useNavigate();
    const [notification, setNotification] = useState(false);
    const [productData, setProductData] = useState({
        sku: "",
        name: "",
        price: "",
        productType: "book",
        weight: "",
        size: "",
        length: "",
        width: "",
        height: ""
    })

    const [errorData, setErrorData] = useState({
        sku: false,
        name: false,
        price: false,
        weight: false,
        size: false,
        length: false,
        width: false,
        height: false
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleTypeChange = e => {
        setProductData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleChange = e => {
        setProductData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
            // weight: "",
            // size: "",
            // length: "",
            // width: "",
            // height: ""
        }))

        setErrorData(prevState => ({
            ...prevState,
            [e.target.name]: false
        }))

        if (e.target.name !== "sku" && e.target.name !== "name") {
            if (isNaN(Number(e.target.value))) {
                setErrorData(prevState => ({
                    ...prevState,
                    [e.target.name]: true
                }))
                setErrorMessage("Entered value must be a number");
            }
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();

        let currentError = {};
        // check input fields
        for (let key in errorData) {
            if (!productData[key]) {
                currentError[key] = true;
                setErrorMessage(`This field mustn't be empty`)
                setErrorData(prevState => ({
                    ...prevState,
                    [key]: true
                }))
            } else {
                currentError[key] = false;
            }
        }

        //creating prodcuct if all input data are valid
        // console.log(!currentError.length && !currentError.width && !currentError.height);
        if (!currentError.sku && !currentError.name && !currentError.price) {
            if ((productData.productType === "book" && !isNaN(Number(productData.weight)) && !currentError.weight) ||
                (productData.productType === "dvd" && !isNaN(Number(productData.size)) && !currentError.size) ||
                (productData.productType === "furniture"
                    && !isNaN(Number(productData.length)) && !isNaN(Number(productData.width)) && !isNaN(Number(currentError.height))
                    && !currentError.length && !currentError.width && !currentError.height
                )
            ) {
                try {
                    await createProduct(productData);
                    navigation("/");
                } catch (error) {
                    if (error.message === "409") {
                        setNotification(true);
                    }
                }

            }

        } else {
            return;
        }

    }

    return <div className="product">
        <form onSubmit={handleSubmit} className="product_form" id="product_form">
            <ProductAddControl />
            <div className="product-top">
                <div className="form-group">
                    <label htmlFor="sku">SKU</label>
                    <div>
                        <input type="text" id="sku" name="sku" value={productData.sku} onChange={handleChange} />
                        {errorData.sku && <p className="error">This field mustn't be empty</p>}
                    </div>

                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <div>
                        <input type="text" id="name" name="name" value={productData.name} onChange={handleChange} />
                        {errorData.name && <p className="error">This field mustn't be empty</p>}
                    </div>

                </div>

                <div className="form-group">
                    <label htmlFor="price">Price($)</label>
                    <div>
                        <input type="text" id="price" name="price" value={productData.price} onChange={handleChange} />
                        {errorData.price && <p className="error">{errorMessage}</p>}
                    </div>

                </div>

            </div>

            <div className="switcher">
                <label htmlFor="productType">Type Switcher</label>
                <select name="productType" id="productType" value={productData.productType} onChange={handleTypeChange}>
                    <option value="book">Book</option>
                    <option value="dvd">DVD</option>
                    <option value="furniture">Furniture</option>
                </select>
            </div>

            <div className="product-top">
                {productData.productType === "book" ? <BookDimension weight={productData.weight} handleChange={handleChange} error={errorData.weight} errorMessage={errorMessage} />
                    : productData.productType === "dvd" ?
                        <DvdDimension size={productData.size} handleChange={handleChange} error={errorData.size} errorMessage={errorMessage} /> :
                        productData.productType === "furniture" ? <FurnitureDimension length={productData.length} width={productData.width} height={productData.height}
                            handleChange={handleChange}
                            errorLength={errorData.length}
                            errorWidth={errorData.width}
                            errorHeight={errorData.height}
                            errorMessage={errorMessage} /> :
                            <BookDimension weight={productData.weight} handleChange={handleChange} error={errorData.weight} />
                }

            </div>

        </form>
        {notification && <Notification />}
    </div>
}

export default Product;