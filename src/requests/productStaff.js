

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
        const response = await fetch(process.env.REACT_APP_URL + "/api/create-product", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(productData)
        })

        if (!response.ok) {
            throw new Error(response.status);
        }

    } catch (error) {
        throw new Error(error.message);
    }
}

export const getProducts = async () => {
    const response = await fetch(process.env.REACT_APP_URL + "/api/get-products");
    const data = await response.json();
    return data;
}

export const massDelete = async (productIds) => {
    if (productIds.length > 0) {
        const data = { productIds };
        try {
            //Delete method isn't supported on free 000webhost package
            const response = await fetch(process.env.REACT_APP_URL + "/api/delete-products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Couldn't delete");
            }

            return true;
        } catch (error) {
            return false;
        }

    }

}