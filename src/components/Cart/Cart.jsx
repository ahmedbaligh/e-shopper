import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CardItem from './CartItem/CardItem';

const Cart = ({
  cart: {
    line_items: cartItems = [],
    subtotal: { formatted_with_symbol: subtotal } = {}
  } = {},
  updateCart,
  removeFromCart,
  emptyCart
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You currently have no items in your shopping cart.{' '}
      <Link to="/" className={classes.link}>
        Add some?
      </Link>
    </Typography>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4">
        Your shopping cart
      </Typography>

      {cartItems.length ? (
        <>
          <Grid container spacing={3}>
            {cartItems.map(item => (
              <Grid item xs={12} sm={4} key={item.id}>
                <CardItem
                  item={item}
                  updateCart={updateCart}
                  removeFromCart={removeFromCart}
                />
              </Grid>
            ))}
          </Grid>
          <div className={classes.cartDetails}>
            <Typography variant="h5">{`Subtotal: ${subtotal}`}</Typography>

            <div className={classes.cartControls}>
              <Button
                className={classes.emptyButton}
                size="large"
                type="button"
                variant="contained"
                color="secondary"
                onClick={emptyCart}
              >
                Empty Cart
              </Button>
              <Button
                component={Link}
                to="/checkout"
                className={classes.checkoutButton}
                size="large"
                type="button"
                variant="contained"
                color="primary"
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default Cart;
