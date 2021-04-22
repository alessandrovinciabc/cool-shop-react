import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home/Home.js';
import Shop from './Shop/Shop.js';
import Item from './Item/Item.js';
import Cart from './Cart/Cart.js';
import MissingPage from './MissingPage/MissingPage.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/product/:id" exact component={Item} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/*" component={MissingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
