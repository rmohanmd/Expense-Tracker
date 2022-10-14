import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const filterChangeHandler = (pickedYear) => {
    setYear(pickedYear);
  };

  const expensesFilteredByYear = props.expenses.filter(
    (expense) => year === expense.date.getFullYear().toString()
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={expensesFilteredByYear} />
        <ExpensesList items={expensesFilteredByYear} />
      </Card>
    </li>
  );
};

export default Expenses;
