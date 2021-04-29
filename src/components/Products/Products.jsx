import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, addToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      {products.length ? (
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress size={50} color="inherit" />
        </div>
      )}
    </main>
  );
};

export default Products;
