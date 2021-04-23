import React, { useState } from 'react';

import Header from '../components/Header.js';

import useBackground from '../util/change-bg.js';

import './Item.css';

function Item({ history, match, products, handler }) {
  useBackground('');
  let [qty, setQty] = useState(1);

  let requestedId = match.params.id;

  let getProductById = (id) => {
    return products.filter((product) => id === product.id)[0];
  };

  let product = getProductById(requestedId);

  let onQtyChange = (e) => {
    let newValue = +e.target.value;
    if (newValue <= 0 || newValue > 99) return;
    setQty(newValue);
  };

  let handleAddToCart = () => {
    handler(product.id, qty);
    history.push('/cart');
  };

  return (
    <React.Fragment>
      <Header />
      <div className="ItemDisplay">
        <img
          className="ItemDisplay__image"
          src={`${process.env.PUBLIC_URL}${product.img}`}
          alt={product.name}
        />
        <div className="ItemDisplay__form">
          <div className="ItemDisplay__name">{product.name}</div>
          <div className="ItemDisplay__prices">
            <div className="ItemDisplay__current">
              ${product.prices.current}
            </div>
            <div className="ItemDisplay__previous">
              ${product.prices.previous}
            </div>
          </div>
          <div className="ItemDisplay__input">
            <input
              className="Item__number"
              type="number"
              min="1"
              max="99"
              autoComplete="off"
              value={qty}
              onChange={onQtyChange}
            />
            <button className="Item__add" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Item;
