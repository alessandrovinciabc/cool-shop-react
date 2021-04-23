import React from 'react';

import useBackground from '../util/change-bg.js';

import { Link } from 'react-router-dom';

import './Shop.css';

function Shop(props) {
  useBackground('');

  let { products } = props;

  let displayProducts = () => {
    return products.map((product) => {
      return (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="Shop__item">
            <img
              src={`${process.env.PUBLIC_URL}${product.img}`}
              alt={product.name}
              className="item__image"
            />
            <div className="item__name">{product.name}</div>
            <div className="item__prices">
              <div className="price__current">${product.prices.current}</div>
              <div className="price__previous">${product.prices.previous}</div>
            </div>
          </div>
        </Link>
      );
    });
  };

  return <div className="Shop__container">{displayProducts()}</div>;
}

export default Shop;
