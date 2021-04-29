import React, { useEffect, useState } from 'react';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress
} from '@material-ui/core';

import { Add, DeleteRounded, Remove } from '@material-ui/icons';

import useStyles from './styles';

const CardItem = ({
  item: {
    id,
    name,
    media: { source: image },
    line_total: { formatted_with_symbol: price },
    quantity
  } = {},
  updateCart,
  removeFromCart
}) => {
  const classes = useStyles();

  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [loading, setLoading] = useState(false);

  const updateQuantity = updater => {
    setItemQuantity(prevQuantity => prevQuantity + updater);
    updateCart(id, quantity + updater);
  };

  useEffect(() => {
    setLoading(quantity === itemQuantity ? false : true);
  }, [quantity, itemQuantity]);

  return (
    <Card>
      <CardMedia image={image} alt={name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5">{price}</Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.quantityControl}>
          <Button
            size="small"
            onClick={() => updateQuantity(-1)}
            disabled={loading}
          >
            {quantity === 1 ? <DeleteRounded /> : <Remove />}
          </Button>
          <Typography className={classes.quantity}>
            {loading ? <CircularProgress size={20} /> : quantity}
          </Typography>
          <Button
            size="small"
            onClick={() => updateQuantity(1)}
            disabled={loading}
          >
            <Add />
          </Button>
        </div>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={() => removeFromCart(id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
