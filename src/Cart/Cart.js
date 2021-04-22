import React from 'react';

import Header from '../components/Header.js';

import useBackground from '../util/change-bg.js';

function Cart(props) {
  useBackground('');
  return (
    <React.Fragment>
      <Header />
      <h1>Cart</h1>
    </React.Fragment>
  );
}

export default Cart;
