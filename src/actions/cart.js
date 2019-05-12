import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, UPDATE_CART_TOTAL } from "./types";
import { calcImportationTax, calcSalesTax } from "../utils/taxCalculator";

export const addProductToCart = product => dispatch => {
    const productImportationTax = product.importationTax ? calcImportationTax(product.price) : 0;
    const productSalesTax = product.salesTax ? calcSalesTax(product.price) : 0;
    const totals = {
        price: product.price + productImportationTax + productSalesTax,
        importationTax: productImportationTax,
        salesTax: productSalesTax,
    };

    dispatch({ type: UPDATE_CART_TOTAL, payload: totals });

    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: {
            ...product,
            importationTax: productImportationTax,
            salesTax: productSalesTax,
        },
    });
};

export const removeProductFromCart = productId => dispatch => {
    dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId,
    });
};
