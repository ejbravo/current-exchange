import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { indigo } from '@material-ui/core/colors';

const style = makeStyles({
  button: {
    backgroundColor: indigo[500],
    color: indigo[50],
    '&:hover': {
      backgroundColor: indigo[300],
      color: indigo[900],
    },
  },
});

interface IProps {
  onClick: () => void;
}

const Reload = ({ onClick }: IProps) => {
  const classes = style();

  return (
    <Box m={2}>
      <Button variant="contained" className={classes.button} onClick={onClick}>
        Reload
      </Button>
    </Box>
  );
};

export default Reload;
