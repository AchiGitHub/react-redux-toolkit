import React from "react";

function IncomeExpenseCard({ totalIncome, totalExpense }) {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${totalIncome.toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${totalExpense.toFixed(2) * -1}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenseCard;
