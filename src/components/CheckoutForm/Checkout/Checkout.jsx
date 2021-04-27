import React, { useState, useEffect } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CssBaseline
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import OrderSummary from '../OrderSummary';
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = ({ cartID, order, onOrder, error }) => {
  const classes = useStyles();

  const history = useHistory();

  const [activeStep, setActiveStep] = useState(0);
  const [token, setToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
    const getToken = async () => {
      try {
        setToken(
          await commerce.checkout.generateToken(cartID, { type: 'cart' })
        );
      } catch (err) {
        if (activeStep !== steps.length) history.push('/');
      }
    };

    if (cartID) getToken();
  }, [cartID, activeStep, history]);

  const updateStep = (updater = 1) =>
    setActiveStep(prevState => prevState + updater);

  const nextStep = fields => {
    setShippingData(fields);
    updateStep();
  };

  const ChooseForm = () => {
    switch (activeStep) {
      case steps.length:
        return <OrderSummary classes={classes} order={order} error={error} />;
      case 0:
        return <AddressForm token={token} nextStep={nextStep} />;
      default:
        return (
          <PaymentForm
            token={token}
            updateStep={updateStep}
            shippingData={shippingData}
            onOrder={onOrder}
          />
        );
    }
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>

          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(step => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <ChooseForm />
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
