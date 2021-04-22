import React from 'react';

import Header from '../components/Header.js';

import useBackground from '../util/change-bg.js';

import './Item.css';

function Item({ match, products }) {
  useBackground('');

  let requestedId = match.params.id;

  let getProductById = (id) => {
    return products.filter((product) => id === product.id)[0];
  };

  let product = getProductById(requestedId);

  return (
    <React.Fragment>
      <Header />
      <div className="ItemDisplay">
        <img
          className="ItemDisplay__image"
          src={product.img}
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
              value="1"
            />
            <button className="Item__add">Add To Cart</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Item;
