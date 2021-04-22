import React from 'react';

import Header from '../components/Header.js';
import useBackground from '../util/change-bg.js';

function Shop(props) {
  useBackground('');
  return (
    <React.Fragment>
      <Header />
      <h1>Shop</h1>
    </React.Fragment>
  );
}

export default Shop;
