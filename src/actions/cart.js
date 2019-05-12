import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    ADD_PRICE_TO_CART_TOTAL,
    REMOVE_PRICE_FROM_CART_TOTAL,
} from "./types";
import { calcImportationTax, calcSalesTax } from "../utils/taxCalculator";

export const addProductToCart = product => dispatch => {
    const productImportationTax =
        typeof product.importationTax === "boolean"
            ? product.importationTax
                ? calcImportationTax(product.price)
                : 0
            : product.importationTax;
    const productSalesTax =
        typeof product.salesTax === "boolean"
            ? product.salesTax
                ? calcSalesTax(product.price)
                : 0
            : product.salesTax;
    const totals = {
        price: product.price + productImportationTax + productSalesTax,
        importationTax: productImportationTax,
        salesTax: productSalesTax,
    };

    dispatch({ type: ADD_PRICE_TO_CART_TOTAL, payload: totals });

    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: {
            ...product,
            importationTax: productImportationTax,
            salesTax: productSalesTax,
        },
    });
};

export const removeProductFromCart = product => dispatch => {
    const productImportationTax = product.importationTax ? calcImportationTax(product.price) : 0;
    const productSalesTax = product.salesTax ? calcSalesTax(product.price) : 0;
    const totals = {
        price: product.price + productImportationTax + productSalesTax,
        importationTax: productImportationTax,
        salesTax: productSalesTax,
    };

    dispatch({ type: REMOVE_PRICE_FROM_CART_TOTAL, payload: totals });

    dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: product.id,
    });
};
