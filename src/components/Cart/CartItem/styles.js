import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
    backgroundSize: 'contain',
    margin: '8px'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10
  },
  cardActions: {
    justifyContent: 'space-between',
    paddingBottom: '5%'
  },

  quantityControl: {
    display: 'flex',
    alignItems: 'center'
  },
  quantity: {
    width: 40,
    textAlign: 'center',
    fontSize: 18
  }
}));
