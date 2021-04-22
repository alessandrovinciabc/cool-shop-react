import React from 'react';

function Item({ match }) {
  return <h1>Item requested: {match.params.id}</h1>;
}

export default Item;
