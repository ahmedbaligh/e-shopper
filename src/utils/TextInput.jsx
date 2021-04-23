import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

const TextInput = ({ name, label, required }) => (
  <Grid item xs={12} sm={6}>
    <Controller
      name={name}
      control={useFormContext().control}
      render={({ field }) => (
        <TextField
          {...field}
          value={field.value || ''}
          label={label}
          required={required}
          fullWidth
        />
      )}
    />
  </Grid>
);

export default TextInput;
