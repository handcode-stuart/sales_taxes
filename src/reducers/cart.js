import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../actions/types";

const initialState = {
    products: [],
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_PRODUCT_TO_CART:
        case REMOVE_PRODUCT_FROM_CART:
        default:
            return state;
    }
}
