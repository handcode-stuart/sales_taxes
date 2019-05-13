import React, { useState } from "react";
import { connect } from "react-redux";

import "./ProductsList.scss";

import Product from "./Product/Product";

const ProductsList = ({ products }) => {
    const [filterCategory, setFilterCategory] = useState(null);

    const filteredProducts = filterCategory
        ? products
              .filter(item => item.category === filterCategory)
              .map(item => <Product key={item.id} product={item} />)
        : products.map(item => <Product key={item.id} product={item} />);

    const productCategories = products
        .reduce((a, b) => {
            a.indexOf(b.category) < 0 && a.push(b.category);
            return a;
        }, [])
        .map(category => (
            <button
                className='button'
                key={category}
                onClick={() => filterProductListCategory(category)}
            >
                {category}
            </button>
        ));

    const filterProductListCategory = (category = null) => {
        category ? setFilterCategory(category) : setFilterCategory(null);
    };

    return (
        <div>
            <h1>Products</h1>
            <div>
                <button className='button' onClick={() => filterProductListCategory()}>
                    All
                </button>
                {productCategories}
            </div>
            <div className='products-list'>{filteredProducts}</div>
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.products,
});

export default connect(mapStateToProps)(ProductsList);
