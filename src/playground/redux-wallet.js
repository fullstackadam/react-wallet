import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
// const addExpense = (
//   { 
//     description = '', 
//     note = '', 
//     amount = 0, 
//     createdAt = 0 
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });

// const removeExpense = ({ id } = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// });

// const editExpense = (id, updates) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// });

// const expensesReducerDefaultState = [];

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return state.concat(action.expense);
//       break;
//     case 'REMOVE_EXPENSE':
//       return state.filter(({ id }) =>  id !== action.id);
//       break;
//     case 'EDIT_EXPENSE':
//       return state.map((expense) => {
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates
//           };
//         } else {
//           return expense;
//         }
//       });
//     default:
//       return state;
//   }
// };

// const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// });

// const sortByAmount = () => ({
//   type: 'SORT_BY_AMOUNT',
//   sortBy: 'amount'
// });

// const sortByDate = () => ({
//   type: 'SORT_BY_DATE',
//   sortBy: 'date'
// });

// const setStartDate = (startDate) => ({
//   type: 'SET_START_DATE',
//   startDate
// });

// const setEndDate = (endDate) => ({
//   type: 'SET_END_DATE',
//   endDate
// });

// const filtersReducerDefaultState = {
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined
// };

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'SET_TEXT_FILTER':
//       return {
//         ...state,
//         text: action.text
//       };
//       break;
//     case 'SORT_BY_AMOUNT':
//       return {
//         ...state,
//         sortBy: action.sortBy
//       };
//       break;
//     case 'SORT_BY_DATE':
//       return {
//         ...state,
//         sortBy: action.sortBy
//       };
//       break;
//     case 'SET_START_DATE':
//       return {
//         ...state,
//         startDate: action.startDate
//       };
//       break;
//     case 'SET_END_DATE':
//       return {
//         ...state,
//         endDate: action.endDate
//       };
//       break;
//     default:
//       return state;
//   }
// };

// get visible expenses

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses.filter((expense) => {
//     const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//     const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//     const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

//     return startDateMatch && endDateMatch && textMatch;
//   }).sort((a, b) => {
//     // descending order
//     if (sortBy === 'date') {
//       return a.createdAt < b.createdAt ? 1 : -1;
//     } else if (sortBy === 'amount') {
//       return a.amount < b.amount ? 1 : -1;
//     }
//   });
// };


// store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();

  const visibleExpenses = getVisibleExpenses(
    state.expenses,
    state.filters
  );

  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'AK47', amount: 50000, createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Drugs', amount: 2000, createdAt: -3000 }));
const bail = store.dispatch(addExpense({ description: 'Bail', amount: 3000000, createdAt: 50 }));

// const expense = store.dispatch(addExpense({ description: 'Prostitute', amount: 30000 }));

// console.log(expense);

// store.dispatch(removeExpense({ id: expense.expense.id }));

// store.dispatch(editExpense(bail.expense.id, { amount: 10000000 }));

// store.dispatch(setTextFilter('Bail'));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// console.log(store.getState());


//store.dispatch(setTextFilter('ba'));

// store.dispatch(setStartDate(125));

// store.dispatch(setStartDate())

// store.dispatch(setEndDate(777));

// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: 'fashgdfafd',
    description: 'Prostitute',
    note: 'love long time',
    amount: 30000,
    createdAt: 0
  }],
  filters: {
    text: 'long',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};