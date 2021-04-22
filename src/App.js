import React, { useEffect, useState } from 'react';

import { commerce } from './lib/commerce';
import { Navbar, Products, Cart } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  const getProducts = async () => {
    const { data: updatedProducts } = await commerce.products.list();
    setProducts(updatedProducts);
  };

  const getCart = async () => setCart(await commerce.cart.retrieve());

  const addToCart = async (id, quantity = 1) =>
    setCart((await commerce.cart.add(id, quantity)).cart);

  return (
    <div>
      <Navbar cartItems={cart.total_items} />
      <Cart cart={cart} />
      {/* <Products products={products} addToCart={addToCart} /> */}
    </div>
  );
};

export default App;
