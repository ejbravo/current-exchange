import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { makeStyles } from '@material-ui/core/styles';

// import { formatDate } from '../utilities/helpers';

const style = makeStyles({
  datepicker: {
    padding: 8,
    margin: 8,
  },
});

interface IProps {
  minDate?: Date;
  onChange: (date: Date) => void;
}

const DatePicker = (props: IProps) => {
  const { minDate, onChange } = props;

  const classes = style();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.datepicker}
        clearable
        value={selectedDate}
        onChange={(date: MaterialUiPickersDate) => {
          date && setSelectedDate(date);
          date && onChange(date);
        }}
        minDate={minDate || new Date()}
        format="dd/MM/yyyy"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;

/*
function getDefaultDate(): string {
  const now: number = Date.now();
  return formatDate(now, '/');
}
*/
