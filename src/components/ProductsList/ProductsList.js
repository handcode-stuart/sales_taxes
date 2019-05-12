import React, { useState } from "react";
import { connect } from "react-redux";

import "./ProductsList.scss";

const ProductsList = ({ products }) => {
    const [filterCategory, setFilterCategory] = useState(null);

    const filteredProducts = filterCategory
        ? products
              .filter(item => item.category === filterCategory)
              .map(item => <div>{item.name}</div>)
        : products.map(item => <div>{item.name}</div>);

    const productCategories = products
        .reduce((a, b) => {
            a.indexOf(b.category) < 0 && a.push(b.category);
            return a;
        }, [])
        .map(category => (
            <button onClick={() => filterProductListCategory(category)}>{category}</button>
        ));

    const filterProductListCategory = (category = null) => {
        category ? setFilterCategory(category) : setFilterCategory(null);
    };

    return (
        <div>
            <h1>Products list</h1>
            <div>
                <button onClick={() => filterProductListCategory()}>All</button>
                {productCategories}
            </div>
            {filteredProducts}
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.products,
});

export default connect(mapStateToProps)(ProductsList);
