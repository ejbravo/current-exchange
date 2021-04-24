import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

const style = makeStyles({
  title: {
    color: indigo[500],
  },
});

const Title = () => {
  const classes = style();
  return (
    <Box m={2} className={classes.title}>
      <h1>Current exchange from SNB</h1>
    </Box>
  );
};

export default Title;
