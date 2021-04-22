import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home/Home.js';
import Shop from './Shop/Shop.js';
import Item from './Item/Item.js';
import Cart from './Cart/Cart.js';
import MissingPage from './MissingPage/MissingPage.js';

import products from './data/products.json';

function App() {
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
          render={(props) => <Item {...props} products={products} />}
        />
        <Route path="/cart" exact component={Cart} />
        <Route path="/*" component={MissingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
