import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography className={classes.title}>
            <img
              src={logo}
              alt="e-Shopper"
              height="25px"
              className={classes.image}
            />
            e-Shopper
          </Typography>

          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton aria-label="Show Cart Items" color="inherit">
              <Badge badgeContent={3} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
