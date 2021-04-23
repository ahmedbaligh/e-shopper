import React from 'react';
import { Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

const SelectMenu = ({ name, label, required, options = [] }) => (
  <Grid item xs={12} sm={6}>
    <InputLabel>{label}</InputLabel>
    <Controller
      name={name}
      control={useFormContext().control}
      render={({ field }) => (
        <Select
          {...field}
          value={field.value || ''}
          fullWidth
          required={required}
        >
          {options.map(({ name, value }) => (
            <MenuItem key={value} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  </Grid>
);

export default SelectMenu;
