import React from 'react';

import Header from '../components/Header.js';
import useBackground from '../util/change-bg.js';

import './Shop.css';

function Shop(props) {
  useBackground('');

  let { products } = props;

  let displayProducts = () => {
    return products.map((product) => {
      return (
        <div className="Shop__item" key={product.id}>
          <img src={product.img} alt={product.name} className="item__image" />
          <div className="item__name">{product.name}</div>
          <div className="item__prices">
            <div className="price__current">${product.prices.current}</div>
            <div className="price__previous">${product.prices.previous}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="Shop__container">{displayProducts()}</div>
    </React.Fragment>
  );
}

export default Shop;
