import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProductToCart } from "../../../actions/cart";

const Product = ({ addProductToCart, product }) => {
    const { name, price, image } = product;

    return (
        <div className='products-list__product'>
            <div className='products-list__product__img-holder'>
                <img src={image} alt={`${name}`} />
            </div>
            <div className='products-list__product__meta'>
                <div>
                    <h3 className='products-list__product__name'>{name}</h3>
                    <h4>£{price.toFixed(2)}</h4>
                </div>
                <div>
                    <button className='button' onClick={() => addProductToCart(product)}>
                        Add to cart
                    </button>
                </div>
            </div>
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
