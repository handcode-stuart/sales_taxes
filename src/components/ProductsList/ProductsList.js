import React, { useState } from "react";
import { connect } from "react-redux";

import "./ProductsList.scss";

import CategoryButtons from "./CategoryButtons/CategoryButtons";
import Product from "./Product/Product";

const ProductsList = ({ products }) => {
    const [filterCategory, setFilterCategory] = useState(null);

    const filteredProducts = filterCategory
        ? products
              .filter(item => item.category === filterCategory)
              .map(item => <Product key={item.id} product={item} />)
        : products.map(item => <Product key={item.id} product={item} />);

    const filterProductListCategory = (category = null) => {
        category ? setFilterCategory(category) : setFilterCategory(null);
    };

    return (
        <div>
            <h1>Products</h1>
            <CategoryButtons
                products={products}
                filterProductListCategory={filterProductListCategory}
            />
            <div className='products-list'>{filteredProducts}</div>
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.products,
});

export default connect(mapStateToProps)(ProductsList);
