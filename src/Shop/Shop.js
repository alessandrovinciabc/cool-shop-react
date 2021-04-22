import React from 'react';

import Header from '../components/Header.js';
import useBackground from '../util/change-bg.js';

import './Shop.css';

function Shop(props) {
  useBackground('');
  return (
    <React.Fragment>
      <Header />
      <div className="Shop__container">
        <div className="Shop__item">
          <img
            src="./assets/images/products/headphones.jpg"
            alt="headphones"
            className="item__image"
          />
          <div className="item__name">Epic Headphones</div>
          <div className="item__prices">
            <div className="price__current">$70</div>
            <div className="price__previous">$118</div>
          </div>
        </div>
        <div className="Shop__item">
          <img
            src="./assets/images/products/keyboard.jpg"
            alt="keyboard"
            className="item__image"
          />
          <div className="item__name">Good Looking Keyboard</div>
          <div className="item__prices">
            <div className="price__current">$54</div>
            <div className="price__previous">$78</div>
          </div>
        </div>
        <div className="Shop__item">
          <img
            src="./assets/images/products/watch.jpg"
            alt="laptop"
            className="item__image"
          />
          <div className="item__name">Nice Watch</div>
          <div className="item__prices">
            <div className="price__current">$34</div>
            <div className="price__previous">$47</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Shop;
