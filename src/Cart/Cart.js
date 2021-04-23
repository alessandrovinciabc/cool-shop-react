import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/product/${entry.id}`}>
          <img
            className="Entry__image"
            src={`${process.env.PUBLIC_URL}${product.img}`}
            alt=""
          />
        </Link>
        <div className="Entry__details">
          <div className="Entry__name">
            <Link to={`/product/${entry.id}`}>{product.name}</Link>
          </div>
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
              handler.input(entry.id, +newQty);
            }}
          />
          <button
            className="Entry__remove"
            onClick={() => {
              handler.remove(entry.id);
            }}
          ></button>
        </div>
      </div>
    );
  };

  return (
    <div className="Boxes">
      <div className="Box Box--left">
        <h1>Your shopping cart</h1>
      </div>
      <div className="Box Box--right">
        {cart.map((product) => {
          return displayCartEntry(product);
        })}
        {cart.length > 0 ? (
          <React.Fragment>
            <div className="Total">
              Total: <span className="Total__price">${total}</span>
            </div>
            <button className="Checkout">Checkout</button>
          </React.Fragment>
        ) : (
          <h2>Nothing here!</h2>
        )}
      </div>
    </div>
  );
}

export default Cart;
