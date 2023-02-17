import { useEffect, useContext } from "react";
import ProductListControl from "../utils/ProductListControl";
import Card from "./Card";
import { getProducts } from "../../requests/productStaff";
import ProductContext from "../../store/Product";

function Products() {
    const { products, setProducts } = useContext(ProductContext);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                setProducts([]);
            }

        }
        fetchData();
        // eslint-disable-next-line
    }, [])

    return <div className="products">
        <ProductListControl />
        {products.map(product => (
            <Card key={product.id} product={product} />
        ))}

    </div>
}

export default Products;