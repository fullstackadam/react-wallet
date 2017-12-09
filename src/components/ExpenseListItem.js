import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, amount, createdAt, description, dispatch }) => (
  <div>
    <h4>{amount} | {createdAt}</h4>
    <p>{description}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }))
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);