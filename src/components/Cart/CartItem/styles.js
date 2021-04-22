import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
    backgroundSize: 'contain'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
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
    padding: '0 15px'
  }
}));
