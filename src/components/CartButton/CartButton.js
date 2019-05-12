import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./CartButton.scss";

const CartButton = ({ cart }) => {
    const cartCount = cart.map(product => product.quantity).reduce((acc, val) => acc + val, 0);

    return (
        <Link to='/checkout' className='cart-button'>
            <i className='fas fa-shopping-basket' /> ({cartCount})
        </Link>
    );
};

CartButton.propTypes = {
    cart: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    cart: state.cart.products,
});

export default connect(mapStateToProps)(CartButton);
