import React, { useState } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home/Home.js';
import Shop from './Shop/Shop.js';
import Item from './Item/Item.js';
import Cart from './Cart/Cart.js';
import MissingPage from './MissingPage/MissingPage.js';

import products from './data/products.json';

function App() {
  let [cart, setCart] = useState([]);

  let addToCart = (id, quantity) => {
    let exists = products.filter((product) => product.id === id);
    if (!exists) throw new Error('Product does not exist.');

    setCart((previous) => {
      let copy = JSON.parse(JSON.stringify(previous));

      let previouslyAdded = cart.findIndex((entry) => entry.id === id);
      if (previouslyAdded !== -1) {
        copy[previouslyAdded].quantity += quantity;
        if (copy[previouslyAdded].quantity > 99) return previous;
      } else {
        copy.push({ id, quantity });
      }

      return copy;
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/shop"
          exact
          render={(props) => <Shop {...props} products={products} />}
        />
        <Route
          path="/product/:id"
          exact
          render={(props) => (
            <Item {...props} products={products} handler={addToCart} />
          )}
        />
        <Route
          path="/cart"
          exact
          component={(props) => <Cart {...props} cart={cart} />}
        />
        <Route path="/*" component={MissingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
