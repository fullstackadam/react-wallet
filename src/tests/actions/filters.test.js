import moment from 'moment';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const startDate = moment(0);
  const action = setStartDate(startDate);

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate
  });
});

test('should generate set end date action object', () => {
  const endDate = moment(0);
  const action = setEndDate(endDate);

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate
  });
});

test('should up set text filter action object', () => {
  const action = setTextFilter(
    'Water');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Water'
  });
});

test('should set up set text filter action object with default values', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should set sort by amount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
});

test('should set sort by date action object', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  });
});