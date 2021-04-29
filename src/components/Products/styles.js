import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  root: {
    flexGrow: 1
  },
  spinner: {
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    width: 'max-content',
    height: '70vh',
    margin: 'auto',
    color: '#999'
  }
}));
