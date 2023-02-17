import { createContext, useState } from "react";

const ProductContext = createContext({
    products: [],
    productIds: [],
    setProducts: function (productList) { },
    removeProducts: function (ids) { },
    addProductId: function (id) { },
    removeProductId: function (id) { },
    cleanProductIds: function () { }
})

export function ProductContextProvider({ children }) {

    const [productsList, setProductsList] = useState([]);
    const [productIds, setProductIds] = useState([]);

    const setProducts = (fetchedProducts) => {
        setProductsList(fetchedProducts);
    }

    const removeProducts = ids => {
        setProductsList(prevState => {
            const newProductList = [];
            for (let i = 0; i < prevState.length; i++) {
                let add = true;
                for (let j = 0; j < ids.length; j++) {
                    if (prevState[i].id === ids[j]) {
                        add = false;
                        break;
                    }
                }
                if (add) {
                    newProductList.push(prevState[i]);
                }
            }
            return newProductList;
        })
    }

    const addProductId = id => {
        setProductIds(prevState => {
            const temp = [...prevState];
            temp.push(id);
            return temp;
        });
    }

    const removeProductId = id => {
        setProductIds(prevState => {
            const temp = [...prevState].filter(el => el !== id);
            return temp
        })
    }

    const cleanProductIds = () => {
        setProductIds([]);
    }


    const context = {
        products: productsList,
        productIds,
        setProducts,
        removeProducts,
        addProductId,
        removeProductId,
        cleanProductIds
    }
    return <ProductContext.Provider value={context}>
        {children}
    </ProductContext.Provider>
}


export default ProductContext;