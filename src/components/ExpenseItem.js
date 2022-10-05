import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 19 2019</div>
      <div claaName="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">$249.67</div>
    </div>
  );
}

export default ExpenseItem;
