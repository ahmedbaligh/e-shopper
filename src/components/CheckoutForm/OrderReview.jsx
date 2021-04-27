import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const OrderReview = ({ cartItems, totalPrice, classes }) => (
  <>
    <Typography variant="h6" gutterBottom>
      Order Summary
    </Typography>

    <List disablePadding>
      {cartItems.map(
        ({ name, quantity, line_total: { formatted_with_symbol: price } }) => (
          <ListItem key={name} style={{ padding: '10px 0' }}>
            <ListItemText primary={name} secondary={`Quantity: ${quantity}`} />
            <Typography className={classes.itemPrice} variant="body2">
              {price}
            </Typography>
          </ListItem>
        )
      )}

      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: '700' }}>
          {totalPrice}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default OrderReview;
