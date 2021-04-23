import React, { useEffect, useState } from 'react';

import Header from '../components/Header.js';

import useBackground from '../util/change-bg.js';

import './Cart.css';

function Cart({ products, cart, handler }) {
  useBackground('');
  let [total, setTotal] = useState(0);

  let getProduct = (id, where) => {
    let product = where.find((product) => id === product.id);
    return product;
  };

  useEffect(() => {
    let total = cart.reduce((accumulator, el) => {
      let quantity = el.quantity;
      let price = getProduct(el.id, products).prices.current;

      return accumulator + quantity * price;
    }, 0);
    setTotal(total);
  }, [cart, products]);

  let displayCartEntry = (entry) => {
    let product = getProduct(entry.id, products);
    return (
      <div className="Entry" key={entry.id}>
        <img className="Entry__image" src={product.img} alt="" />
        <div className="Entry__details">
          <div className="Entry__name">{product.name}</div>
          <div className="Entry__price">${product.prices.current}</div>
        </div>

        <div className="Entry__controls">
          <input
            className="Entry__qty"
            type="number"
            value={entry.quantity}
            onChange={(e) => {
              let newQty = e.target.value;
              if (+newQty <= 0 || +newQty > 99) return;
              handler(entry.id, +newQty);
            }}
          />
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
