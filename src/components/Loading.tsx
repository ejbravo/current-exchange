import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const style = makeStyles({
  loading: {
    color: indigo[500],
  },
});

const Loading = () => {
  const classes = style();
  return (
    <Box mt={30} className={classes.loading}>
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loading;
