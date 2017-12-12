import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'rent',
  note: '',
  amount: 19500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'cover charge',
  note: '',
  amount: 1500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: moment(0)
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1], expenses[0]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});