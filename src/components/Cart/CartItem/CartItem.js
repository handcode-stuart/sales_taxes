import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProductToCart, removeProductFromCart } from "../../../actions/cart";

const CartItem = ({ addProductToCart, removeProductFromCart, item }) => {
    const { id, name, quantity, price, importationTax, salesTax } = item;

    return (
        <Fragment>
            <tr>
                <td>{name}</td>
                <td>
                    <button
                        className='btn'
                        onClick={() =>
                            removeProductFromCart({ id, price, importationTax, salesTax })
                        }
                    >
                        -
                    </button>
                    {quantity}
                    <button className='btn' onClick={() => addProductToCart(item)}>
                        +
                    </button>
                </td>
                <td>£{price.toFixed(2)}</td>
            </tr>
        </Fragment>
    );
};

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        addProductToCart,
        removeProductFromCart,
    },
)(CartItem);
