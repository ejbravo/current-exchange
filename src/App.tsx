import React, { useState, Fragment } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
  const [reload, setReload] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const { currentExchange } = useCurrentExchange(reload);

  const getMinDate = (items: ICurrentExchange[]): Date => {
    const lastDate = items[items.length - 1].date;
    return new Date(lastDate);
  };

  return (
    <div className="App">
      <main className="App-main">
        <Container>
          <Title />
          <ReloadButton onClick={() => setReload(!reload)} />
          {currentExchange ? (
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
          ) : (
            <Loading />
          )}
        </Container>
      </main>
    </div>
  );
}

export default App;
