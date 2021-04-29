import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    marginBottom: '5%',
    textTransform: 'capitalize'
  },
  cartDetails: {
    display: 'flex',
    margin: '10% 0 5%',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginTop: '15%',
      textAlign: 'center'
    }
  },
  cartControls: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '8%'
    }
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px'
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px'
    }
  },
  checkoutButton: {
    minWidth: '150px'
  },
  link: {
    color: 'inherit',
    fontWeight: '700',
    textDecoration: 'none',
    '&:hover': {
      color: '#999'
    }
  }
}));
