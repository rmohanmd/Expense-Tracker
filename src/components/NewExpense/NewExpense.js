import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const onFormSubmit = (submitedExpenseData) => {
    const expenseData = {
      ...submitedExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const displayForm = () => {
    setShowForm(true);
  };

  const noDisplayForm = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={displayForm}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onFormSubmit={onFormSubmit}
          noDisplayForm={noDisplayForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
