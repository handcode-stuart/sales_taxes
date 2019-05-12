import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../actions/types";

const initialState = {
    products: [],
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            if (state.products.filter(product => product.id === payload.id).length > 0) {
                return {
                    ...state,
                    products: [
                        ...state.products.map(product => ({
                            ...product,
                            quantity:
                                product.id === payload.id ? product.quantity + 1 : product.quantity,
                        })),
                    ],
                };
            } else {
                return {
                    ...state,
                    products: [
                        ...state.products,
                        {
                            quantity: 1,
                            ...payload,
                        },
                    ],
                };
            }

        case REMOVE_PRODUCT_FROM_CART:
        default:
            return state;
    }
}
