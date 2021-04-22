import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({
  product: {
    name,
    description,
    price: { formatted_with_symbol: price },
    media: { source: image }
  }
}) => {
  const classes = useStyles();

  const removeHTML = str => str.replace(/(<([^>]+)>)/gi, '').trim();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {removeHTML(description)}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
