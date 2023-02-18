import axios from "axios";

export const createProduct = async (productState) => {
    let productData = {
        sku: productState.sku,
        name: productState.name,
        price: productState.price,
        weight: productState.weight,
        size: productState.size,
        productType: productState.productType,
        dimension: {
            length: productState.length,
            width: productState.width,
            height: productState.height
        }
    };
    if (productData.productType === "book") {
        productData.size = null;
        productData.dimension.length = null;
        productData.dimension.width = null;
        productData.dimension.height = null;
    } else if (productData.productType === "dvd") {
        productData.weight = null;
        productData.dimension.length = null;
        productData.dimension.width = null;
        productData.dimension.height = null;
    } else if (productData.productType === "furniture") {
        productData.size = null;
        productData.width = null;
    }

    // console.log(productData);
    try {
        await axios.post(process.env.REACT_APP_URL + "/api/create-product", productData, {
            // headers: {
            //     "Content-Type": "application/json"
            // }
        });

    } catch (error) {
        throw new Error(error.response.status);
    }
}

export const getProducts = async () => {
    const response = await axios.get(process.env.REACT_APP_URL + "/api/get-products");
    return response.data;
}

export const massDelete = async (productIds) => {
    if (productIds.length > 0) {
        const data = { productIds };
        try {
            //Delete method isn't supported on free 000webhost package
            await axios.post(process.env.REACT_APP_URL + "/api/delete-products", { data });
            return true;
        } catch (error) {
            return false;
        }

    }

}