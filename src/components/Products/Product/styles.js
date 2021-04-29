import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundSize: 'contain',
    margin: '8px'
  },
  cardActions: {
    // border: '1px solid red',
    paddingTop: 0,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10
  }
}));
