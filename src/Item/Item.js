import React from 'react';

import Header from '../components/Header.js';

import useBackground from '../util/change-bg.js';

function Item({ match }) {
  useBackground('');
  return (
    <React.Fragment>
      <Header />
      <h1>Item requested: {match.params.id}</h1>
    </React.Fragment>
  );
}

export default Item;
