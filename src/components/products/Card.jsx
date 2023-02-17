import { useContext } from "react";
import ProductContext from "../../store/Product";

function Card({ product }) {
    const { id, sku, name, price, weight } = product;
    const { addProductId, removeProductId } = useContext(ProductContext);

    const handleClick = (e) => {
        if (e.target.checked) {
            addProductId(id);
        } else if (!e.target.checked) {
            removeProductId(id)
        }
    }
    return <div className="card">
        <div className="delete-checkbox">
            <input type="checkbox" id="delete" name="delete" onClick={handleClick} />
        </div>

        <div className="card-body">
            <p>{sku}</p>
            <p>{name}</p>
            <p>{price}</p>
            <p>{weight}</p>
        </div>
    </div>
}

export default Card;