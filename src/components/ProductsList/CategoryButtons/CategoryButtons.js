import React from "react";
import PropTypes from "prop-types";

import "./CategoryButtons.scss";

const CategoryButtons = ({ products, filterProductListCategory }) => {
    return (
        <div className='category-buttons'>
            <button className='button' onClick={() => filterProductListCategory()}>
                All
            </button>
            {products
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
                ))}
        </div>
    );
};

CategoryButtons.propTypes = {
    products: PropTypes.array.isRequired,
    filterProductListCategory: PropTypes.func.isRequired,
};

export default CategoryButtons;
