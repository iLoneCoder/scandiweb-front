import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../../store/Product";
import { massDelete } from "../../requests/productStaff";

function ProductListControl() {


    const navigate = useNavigate();

    const { productIds, removeProducts, cleanProductIds } = useContext(ProductContext);


    const handleAdd = () => {
        cleanProductIds();
        navigate("/add-product");
    }

    const handleMassDelete = async () => {
        const deleted = await massDelete(productIds);
        if (deleted) {
            removeProducts(productIds);
        }
    }

    return <div className="control">
        <div className="control-container">
            <div>
                <h2>Product List</h2>
            </div>
            <div className="btn-group">
                <button className="btn" onClick={handleAdd}>ADD</button>
                <button className="btn" onClick={handleMassDelete}>MASS DELETE</button>
            </div>
        </div>

    </div>
}

export default ProductListControl;