import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProductToCart } from "../../actions/cart";
import "./Product.scss";

const Product = ({ addProductToCart, product }) => {
    const { name, price } = product;

    return (
        <div>
            {name} - £{price.toFixed(2)} -{" "}
            <button onClick={() => addProductToCart(product)}>Add to cart</button>
        </div>
    );
};

Product.propTypes = {
    addProductToCart: PropTypes.func.isRequired,
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }),
};

export default connect(
    null,
    { addProductToCart },
)(Product);
