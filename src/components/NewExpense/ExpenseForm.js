import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target.value === "cancel") {
      setShowForm(false);
    } else {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      props.onFormSubmit(expenseData);

      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");

      setShowForm(false);
    }
  };
  const formShowHandler = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  if (showForm === false) {
    return (
      <form onSubmit={formShowHandler}>
        <div className="new-expense__contorl">
          <div className="new-expense__action">
            <button type="submit">Add New Expense</button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <br />
      <div className="new-expense__actions">
        <button type="submit" value="cancel">
          Cancel
        </button>
        <button type="submit" value="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
