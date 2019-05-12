import React from "react";
import { NavLink, Link } from "react-router-dom";
import CartButton from "../CartButton/CartButton";

import "./Navbar.scss";

const Navbar = () => (
    <nav className='navbar'>
        <div className='container'>
            <div className='navbar__container'>
                <div className='navbar__title-wrapper'>
                    <h1>
                        <Link to='/'>Sales Taxes</Link>
                    </h1>
                </div>
                <div className='navbar__menu-wrapper'>
                    <ul>
                        <li>
                            <NavLink exact to='/' className='navbar__products-btn'>
                                <i className='fas fa-tags' /> Products
                            </NavLink>
                        </li>
                        <li>
                            <CartButton />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;
