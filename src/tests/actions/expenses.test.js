import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '1' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1'
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense('1', { note: 'this is a note'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: { 
      note: 'this is a note' 
    }
  });
});

test('should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Carribean Cruise',
    amount: 1000000,
    createdAt: 1100,
    note: 'awesome investment :)'
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should set up add expense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  });
});