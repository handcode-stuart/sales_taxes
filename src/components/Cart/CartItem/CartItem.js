import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CartItem = ({ item: { name, quantity, price } }) => (
    <Fragment>
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>£{price.toFixed(2)}</td>
        </tr>
    </Fragment>
);

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default CartItem;
