import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartItem from "./CartItem/CartItem";

import "./Cart.scss";

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Checkout</h1>
            {cart.products.length > 0 ? (
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
                            <td>
                                <strong>Total</strong>
                            </td>
                            <td />
                            <td>
                                <div>
                                    <strong>£{cart.total.price.toFixed(2)}</strong>
                                </div>
                                {cart.total.importationTax !== 0 && (
                                    <div>
                                        <span>
                                            inc £{cart.total.importationTax.toFixed(2)} importation
                                            tax
                                        </span>
                                    </div>
                                )}
                                {cart.total.salesTax !== 0 && (
                                    <div>
                                        <span>inc £{cart.total.salesTax.toFixed(2)} sales tax</span>
                                    </div>
                                )}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            ) : (
                <div>Your cart is empty</div>
            )}
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
