import React, { useState, useEffect, useRef, Fragment } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

import {
  ICurrentExchange,
  useCurrentExchange,
} from './hooks/useCurrentExchange';

import Title from './components/Title';
import ReloadButton from './components/ReloadButton';
import Table from './components/Table';
import DatePicker from './components/DatePicker';
import CurrentExchangePerDay from './components/CurrentExchangePerDay';
import Loading from './components/Loading';

import './App.css';

function App() {
  const timer = useRef<NodeJS.Timeout>();

  const [reload, setReload] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const { currentExchange } = useCurrentExchange(reload);

  const getMinDate = (items: ICurrentExchange[]): Date => {
    const lastDate = items[items.length - 1].date;
    return new Date(lastDate);
  };

  useEffect(() => {
    timer.current = setTimeout(() => setShowAlert(true), 10000);
    return () => timer && timer.current && clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (currentExchange && timer && timer.current) {
      clearTimeout(timer.current);
      setShowAlert(false);
    }
  }, [currentExchange]);

  const result = currentExchange && (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <DatePicker
            minDate={getMinDate(currentExchange)}
            onChange={(date) => setSelectedDate(date)}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <CurrentExchangePerDay
            currentExchanges={currentExchange}
            date={selectedDate}
          />
        </Grid>
      </Grid>

      <Table data={currentExchange} />
    </Fragment>
  );

  const alert = (
    <Container>
      <Alert severity="error">
        A connection to the server could not be established.
      </Alert>
    </Container>
  );

  const feedback = !showAlert ? <Loading /> : alert;

  return (
    <div className="App">
      <main className="App-main">
        <Container>
          <Title />
          <ReloadButton onClick={() => setReload(!reload)} />
          {result}
          {!currentExchange && feedback}
        </Container>
      </main>
    </div>
  );
}

export default App;
