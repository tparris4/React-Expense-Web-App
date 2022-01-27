import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  // communicate betqeen components and how you can communicate up
  // make sure that a child component (expense form component) can communicate to the parent component

  // for the button toggle, new to change the state
  return <div className="new-expense">
    {!isEditing && (<button onClick={startEditingHandler}>
      Add New Expense</button>)}
    {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />)}

  </div >
};

export default NewExpense;