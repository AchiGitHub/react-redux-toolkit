import React from "react";
import { useDispatch } from "react-redux";

import {
  createTransaction,
  deleteTransaction,
} from "../../redux/reducers/Transactions";
import HistoryCard from "../../containers/HistoryCard";
import IncomeExpenseCard from "../../containers/IncomeExpenseCard";
import "./styles.css";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);

  const { data } = transactions;

  let totalSum = 0,
    totalExpense = 0,
    totalIncome = 0;

  data.map((item, idx) => {
    if (item.amount > 0) {
      totalIncome += item.amount;
    } else {
      totalExpense += item.amount;
    }
    totalSum += item.amount;
    return totalSum;
  });

  const add = (e) => {
    e.preventDefault();
    const { text, amount } = e.target;
    let obj = {
      text: text.value,
      amount: parseFloat(amount.value),
    };
    dispatch(createTransaction(obj));
    e.target.text.value = "";
    e.target.amount.value = "";
  };

  const remove = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div className="App">
      <h2>Expense Tracker</h2>

      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">${totalSum.toFixed(2)}</h1>
        <IncomeExpenseCard
          totalIncome={totalIncome}
          totalExpense={totalExpense}
        />
        <h3>History</h3>
        <HistoryCard data={data} remove={remove} />
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={add}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input type="number" id="amount" placeholder="Enter amount..." />
          </div>
          <button type="submit" className="btn">
            Add transaction
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
