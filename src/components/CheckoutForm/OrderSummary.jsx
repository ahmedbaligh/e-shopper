import {
  Button,
  CircularProgress,
  Divider,
  Typography
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({
  classes,
  order: { customer, customer_reference: orderReference },
  error
}) =>
  customer ? (
    <>
      <div>
        <Typography>
          Thank you for your purchase, {customer.firstname} {customer.lastname}.
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">
          Order reference: {orderReference}.
        </Typography>
      </div>

      <div className={classes.backToHome}>
        <Button variant="outlined" type="button" component={Link} to="/">
          Back to Home
        </Button>
      </div>
    </>
  ) : error ? (
    <>
      <Typography variant="h5">Sorry, we couldn't make your order.</Typography>
      <Typography variant="h5">Error: {error}</Typography>

      <div className={classes.backToHome}>
        <Button variant="outlined" type="button" component={Link} to="/">
          Back to Home
        </Button>
      </div>
    </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );

export default OrderSummary;
