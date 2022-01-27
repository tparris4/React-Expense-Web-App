import React from 'react';

import './ExpenseItem.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div classname="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__month">{year}</div>
      <div className="expense-date__month">{day}</div>

    </div>
  );
}

export default ExpenseDate;