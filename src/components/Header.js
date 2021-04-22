import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

function Header(props) {
  return (
    <div className="Header">
      <h1 className="Header__text">Cool Shop</h1>
      <div className="Header__navigation">
        <ul className="Navigation">
          <li>
            <Link className="Navigation__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Navigation__link" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="Navigation__link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
