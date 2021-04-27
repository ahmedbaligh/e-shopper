import React, { useState, useEffect, useCallback } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';
import { TextInput, SelectMenu } from '../../utils';
import { objectToArray } from '../../utils/helpers';
import useStyles from './styles';

const AddressForm = ({ token, nextStep }) => {
  const methods = useForm();
  const classes = useStyles();

  const [shipping, setShipping] = useState({
    countries: [],
    country: '',
    subdivisions: [],
    subdivision: '',
    options: [],
    option: ''
  });

  const setShippingDetail = ({ setter = setShipping, key }) => value =>
    key === 'country'
      ? setter(pSt => ({ ...pSt, [key]: value, subdivision: '', option: '' }))
      : setter(prevState => ({ ...prevState, [key]: value }));

  const getShippingCountries = useCallback(async tokenID => {
    const { countries } = await commerce.services.localeListShippingCountries(
      tokenID
    );

    setShippingDetail({ key: 'countries' })(objectToArray(countries));
  }, []);

  const getShippingSubdivisions = useCallback(async countryCode => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingDetail({ key: 'subdivisions' })(objectToArray(subdivisions));
  }, []);

  const getShippingOptions = useCallback(
    async (tokenID, country, region = null) => {
      const options = await commerce.checkout.getShippingOptions(tokenID, {
        country,
        region
      });

      const formattedOptions = options.map(
        ({
          id: value,
          description,
          price: { formatted_with_symbol: price }
        }) => ({ value, name: `${description} (${price})` })
      );

      setShippingDetail({ key: 'options' })(formattedOptions);
    },
    []
  );

  useEffect(() => {
    token?.id && getShippingCountries(token?.id);
  }, [token?.id, getShippingCountries]);

  useEffect(() => {
    shipping.country && getShippingSubdivisions(shipping.country);
  }, [shipping.country, getShippingSubdivisions]);

  useEffect(() => {
    shipping.subdivision &&
      getShippingOptions(token.id, shipping.country, shipping.subdivision);
  }, [getShippingOptions, token?.id, shipping.country, shipping.subdivision]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(fields =>
            nextStep({
              ...fields,
              shippingCountry: shipping.country,
              shippingSubdivision: shipping.subdivision,
              shippingOption: shipping.option
            })
          )}
        >
          <Grid container spacing={3}>
            <TextInput name="firstName" label="First Name" />
            <TextInput name="lastName" label="Last Name" />
            <TextInput name="email" label="Email" />
            <TextInput name="zip" label="ZIP Code" />
            <TextInput name="address1" label="Address" />
            <TextInput name="city" label="City" />

            <div className={classes.spacer} />

            <SelectMenu
              label="Shipping Country"
              name="shippingCountry"
              value={shipping.country}
              options={shipping.countries}
              setter={setShippingDetail({ key: 'country' })}
            />
            <SelectMenu
              label="Shipping Subdivision"
              name="shippingSubdivision"
              value={shipping.subdivision}
              options={shipping.subdivisions}
              setter={setShippingDetail({ key: 'subdivision' })}
            />
            <SelectMenu
              label="Shipping Option"
              name="shippingOption"
              value={shipping.option}
              options={shipping.options}
              setter={setShippingDetail({ key: 'option' })}
            />
          </Grid>

          <div className={classes.buttonsGroup}>
            <Button variant="outlined" component={Link} to="/cart">
              Back to Cart
            </Button>
            <Button variant="contained" type="submit" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
