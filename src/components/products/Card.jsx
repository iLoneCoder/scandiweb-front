import { useContext } from "react";
import ProductContext from "../../store/Product";

function Card({ product }) {
    const { id, sku, name, price, weight, size, length, width, height, product_type } = product;
    const { addProductId, removeProductId } = useContext(ProductContext);

    const handleClick = (e) => {
        if (e.target.checked) {
            addProductId(id);
        } else if (!e.target.checked) {
            removeProductId(id)
        }
    }
    return <div className="card">
        <div >
            <input type="checkbox" id="delete" name="delete" className="delete-checkbox" onClick={handleClick} />
        </div>

        <div className="card-body">
            <p>{sku}</p>
            <p>{name}</p>
            <p>{price}$</p>
            {product_type === "book" ? <p>{weight}KG</p>
                : product_type === "dvd" ? <p>{size}MB</p>
                    : product_type === "furniture" ? <p>{length}x{width}x{height}</p> : <></>}

        </div>
    </div>
}

export default Card;