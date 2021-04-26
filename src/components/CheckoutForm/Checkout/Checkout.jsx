import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography } from '@material-ui/core';

import useStyles from './styles';
import ConfirmationForm from '../ConfirmationForm';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping Address', 'Payment Details', 'Confirmation'];

const Checkout = ({ cartID }) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [token, setToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        cartID &&
          setToken(
            await commerce.checkout.generateToken(cartID, { type: 'cart' })
          );
      } catch (err) {
        console.log('Error occurred: ', err);
      }
    })();
  }, [cartID]);

  const updateStep = updater => setActiveStep(prevState => prevState + updater);

  const nextStep = fields => {
    setShippingData(fields);
    updateStep(1);
  };

  const ChooseForm = () => {
    switch (activeStep) {
      case steps.length:
        return <ConfirmationForm />;
      case 0:
        return <AddressForm token={token} nextStep={nextStep} />;
      default:
        return <PaymentForm />;
    }
  };

  return (
    <>
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
