import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartItem from "./CartItem/CartItem";

import "./Cart.scss";

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Cart</h1>
            <table>
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {cart.products.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td />
                        <td>
                            <div>Total: £{cart.total.price.toFixed(2)}</div>
                            <div>inc £{cart.total.importationTax.toFixed(2)} importation tax</div>
                            <div>inc £{cart.total.salesTax.toFixed(2)} sales tax</div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.shape({
        products: PropTypes.array.isRequired,
        total: PropTypes.object.isRequired,
    }),
};

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
