import React, { useEffect, useState } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './Home/Home.js';
import Shop from './Shop/Shop.js';
import Item from './Item/Item.js';
import Cart from './Cart/Cart.js';
import MissingPage from './MissingPage/MissingPage.js';

import products from './data/products.json';

function App() {
  let [cart, setCart] = useState([]);
  let [quantity, setQuantity] = useState(0);

  let getQuantity = () => {
    setCart((cart) => {
      let totalQuantity = cart.reduce(
        (total, element) => total + element.quantity,
        0
      );

      setQuantity(totalQuantity);

      return cart;
    });
  };

  useEffect(() => {
    getQuantity();
  }, [cart]);

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

  let changeQuantity = (id, newQty) => {
    setCart((previous) => {
      let copy = JSON.parse(JSON.stringify(previous));
      let index = copy.findIndex((el) => id === el.id);
      copy[index].quantity = newQty;

      return copy;
    });
  };

  let removeFromCart = (id) => {
    setCart((previous) => {
      let copy = JSON.parse(JSON.stringify(previous));
      let index = copy.findIndex((el) => id === el.id);

      copy.splice(index, 1);

      return copy;
    });
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route
        path="/"
        component={(props) => <Header {...props} quantity={quantity} />}
      />
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
          component={(props) => (
            <Cart
              {...props}
              cart={cart}
              products={products}
              handler={{ input: changeQuantity, remove: removeFromCart }}
            />
          )}
        />
        <Route path="/*" component={MissingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
