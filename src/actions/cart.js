import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./types";

export const addProductToCart = product => ({
    type: ADD_PRODUCT_TO_CART,
    payload: product,
});

export const removeProductFromCart = productId => ({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
});
