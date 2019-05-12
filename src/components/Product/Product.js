import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";

const Product = ({ product: { name, price } }) => {
    return (
        <div>
            {name} - {price} - <button>Add to cart</button>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }),
};

export default Product;
