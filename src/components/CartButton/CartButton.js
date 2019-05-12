import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./CartButton.scss";

const CartButton = () => (
    <Link to='/checkout' className='cart-button'>
        <i className='fas fa-shopping-basket' /> (0)
    </Link>
);

CartButton.propTypes = {};

export default CartButton;
