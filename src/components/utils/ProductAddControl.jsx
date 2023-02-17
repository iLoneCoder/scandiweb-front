import { useNavigate } from "react-router-dom";

function ProductAddControl() {
    const navigate = useNavigate();

    const handleCancel = async () => {
        navigate("/");
    }

    return <div className="control">
        <div className="control-container">
            <div>
                <h2>Product List</h2>
            </div>
            <div className="btn-group">
                <button type="submit" className="btn">ADD</button>
                <button type="button" className="btn" onClick={handleCancel}>CANCEL</button>
            </div>
        </div>

    </div>
}

export default ProductAddControl;