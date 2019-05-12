import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";

const Product = ({ product: { name } }) => {
    return <div>{name}</div>;
};

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }),
};

export default Product;
