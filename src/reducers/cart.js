import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, UPDATE_CART_TOTAL } from "../actions/types";

const initialState = {
    products: [],
    total: {
        price: 0,
        importationTax: 0,
        salesTax: 0,
    },
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

        case UPDATE_CART_TOTAL:
            return {
                ...state,
                total: {
                    price: state.total.price + payload.price,
                    importationTax: state.total.importationTax + payload.importationTax,
                    salesTax: state.total.salesTax + payload.salesTax,
                },
            };

        case REMOVE_PRODUCT_FROM_CART:
        default:
            return state;
    }
}
