import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import {
  Elements,
  CardElement,
  ElementsConsumer
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import OrderReview from './OrderReview';
import useStyles from './styles';

const PaymentForm = ({
  token: {
    id: tokenID,
    live: {
      line_items: cartItems,
      subtotal: { formatted_with_symbol: totalPrice }
    }
  },
  updateStep,
  shippingData: {
    firstName: firstname,
    lastName: lastname,
    email,
    address1: street,
    city: town_city,
    zip: postal_zip_code,
    shippingCountry: country,
    shippingSubdivision: county_state,
    shippingOption: shipping_method
  },
  onOrder
}) => {
  const classes = useStyles();
  const stripeInstance = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  const onPayment = async (e, elements, stripe) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) console.log('Error: ', error);
    else {
      const orderData = {
        line_items: cartItems,
        customer: { firstname, lastname, email },
        shipping: {
          name: 'Primary',
          street,
          town_city,
          county_state,
          postal_zip_code,
          country
        },
        fulfillment: { shipping_method },
        payment: {
          gateway: 'stripe',
          stripe: { payment_method_id: paymentMethod.id }
        }
      };

      onOrder(tokenID, orderData);
      updateStep();
    }
  };

  return (
    <>
      <OrderReview
        classes={classes}
        cartItems={cartItems}
        totalPrice={totalPrice}
      />
      <Divider className={classes.divider} />

      <Typography className={classes.payment} variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <Elements stripe={stripeInstance}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={e => onPayment(e, elements, stripe)}>
              <CardElement />

              <div className={classes.buttonsGroup}>
                <Button variant="outlined" onClick={() => updateStep(-1)}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {totalPrice}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
