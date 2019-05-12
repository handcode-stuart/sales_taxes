import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CartButton = ({ cartProducts, cartTotal }) => {
    const cartCount = cartProducts
        .map(product => product.quantity)
        .reduce((acc, val) => acc + val, 0);

    return (
        <Link to='/checkout' className='button'>
            <i className='fas fa-shopping-basket' /> ({cartCount}) £{cartTotal.toFixed(2)}
        </Link>
    );
};

CartButton.propTypes = {
    cartProducts: PropTypes.array.isRequired,
    cartTotal: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    cartProducts: state.cart.products,
    cartTotal: state.cart.total.price,
});

export default connect(mapStateToProps)(CartButton);
