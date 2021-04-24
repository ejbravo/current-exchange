import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { ICurrentExchange } from '../hooks/useCurrentExchange';
import { indigo } from '@material-ui/core/colors';

interface IProps {
  currentExchanges: ICurrentExchange[];
  date: Date;
}

const style = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    backgroundColor: indigo[300],
    borderRadius: 4,
    marginBottom: 8,
  },
  listItem: {
    textAlign: 'center',
    color: 'white',
  },
});

const CurrentExchangePerDay = (props: IProps) => {
  const { currentExchanges, date } = props;

  const classes = style();

  const [result, setResult] = useState<ICurrentExchange>(currentExchanges[0]);

  useEffect(() => {
    const getSelectedResult = () => {
      const timestamp = Date.parse(`${date}`);
      const results = currentExchanges.filter((item) => timestamp >= item.date); // >= to include days without data
      setResult(results[0]);
    };
    date && currentExchanges && getSelectedResult();
  }, [currentExchanges, date]);

  const list = result && (
    <List className={classes.list}>
      {Object.keys(result).map((key) => {
        return key !== 'date' ? (
          <ListItem key={key} className={classes.listItem}>
            <ListItemText primary={key.toUpperCase()} secondary={result[key]} />
          </ListItem>
        ) : null;
      })}
    </List>
  );

  return <div>{list}</div>;
};

export default CurrentExchangePerDay;
