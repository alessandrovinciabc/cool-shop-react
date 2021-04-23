import React, { useState } from 'react';

import Header from '../components/Header.js';

import useBackground from '../util/change-bg.js';

import './Cart.css';

function Cart({ products, cart }) {
  useBackground('');
  let [total, setTotal] = useState(0);

  let getProduct = (id) => {
    let product = products.find((product) => id === product.id);
    return product;
  };

  let displayCartEntry = (entry) => {
    let product = getProduct(entry.id);
    return (
      <div className="Entry" key={entry.id}>
        <img className="Entry__image" src={product.img} alt="" />
        <div className="Entry__details">
          <div className="Entry__name">{product.name}</div>
          <div className="Entry__price">${product.prices.current}</div>
        </div>

        <div className="Entry__controls">
          <input className="Entry__qty" type="number" value={entry.quantity} />
          <button className="Entry__remove"></button>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Header />
      <div className="Boxes">
        <div className="Box Box--left">
          <h1>Your shopping cart</h1>
        </div>
        <div className="Box Box--right">
          {cart.map((product) => {
            return displayCartEntry(product);
          })}
          {cart.length > 0 ? (
            <div className="Total">
              Total: <span className="Total__price">${total}</span>
            </div>
          ) : (
            <h2>Nothing here!</h2>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;
