import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { commerce } from './lib/commerce';
import { Navbar, Products, Cart, Checkout } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  const getProducts = async () =>
    setProducts((await commerce.products.list()).data);

  const getCart = async () => setCart(await commerce.cart.retrieve());

  const addToCart = async (id, quantity = 1) =>
    setCart((await commerce.cart.add(id, quantity)).cart);

  const updateCart = async (id, quantity) =>
    setCart((await commerce.cart.update(id, { quantity })).cart);

  const removeFromCart = async id =>
    setCart((await commerce.cart.remove(id)).cart);

  const emptyCart = async () => setCart((await commerce.cart.empty()).cart);

  return (
    <Router>
      <div>
        <Navbar cartItems={cart.total_items} />

        <Switch>
          <Route exact path="/">
            <Products products={products} addToCart={addToCart} />
          </Route>

          <Route exact path="/cart">
            <Cart
              cart={cart}
              updateCart={updateCart}
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
            />
          </Route>

          <Route exact path="/checkout">
            <Checkout cartID={cart.id} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
