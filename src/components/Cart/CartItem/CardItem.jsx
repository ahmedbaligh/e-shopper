import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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

  return (
    <Card>
      <CardMedia image={image} alt={name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5">{price}</Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.quantityControl}>
          <Button size="small" onClick={() => updateCart(id, --quantity)}>
            <RemoveIcon />
          </Button>
          <Typography className={classes.quantity}>{quantity}</Typography>
          <Button size="small" onClick={() => updateCart(id, ++quantity)}>
            <AddIcon />
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
