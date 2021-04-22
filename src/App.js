import React, { useEffect, useState } from 'react';

import { commerce } from './lib/commerce';
import { Navbar, Products } from './components';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data: updatedProducts } = await commerce.products.list();
    setProducts(updatedProducts);
  };

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
