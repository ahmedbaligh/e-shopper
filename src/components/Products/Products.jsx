import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Training shoes.',
    price: '$100',
    image:
      'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1578674395-vans-men-s-low-top-sneakers-1578674390.jpg'
  },
  {
    id: 2,
    name: 'iPhone',
    description: 'iPhone Xs Max',
    price: '$5',
    image:
      'https://media.btech.com/media/catalog/product/cache/6f5b3757ad4606815e1d9a7b4984928a/r/e/refurb-iphone-xs-max-silver.jpg'
  },
  {
    id: 3,
    name: 'Alexa',
    description: "Amazon's Alexa",
    price: '$300',
    image:
      'https://itchronicles.com/wp-content/uploads/2020/12/amazon-alexa-ai.jpg'
  }
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={3}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
