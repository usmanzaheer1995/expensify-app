import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import numeral from "numeral";
import converter from "number-to-words";

import selectExpenses from "./../selectors/expenses";
import expensesTotal from "./../selectors/expenses-total";

export const ExpenseSummary = ({ expenses, expensesTotal }) => {
  const expenseWord = expenses.length === 1 ? "expense" : "expenses";
  // if (expenses.length === 0) return <div />;
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{converter.toWords(expenses.length)}</span> {expenseWord} totaling{" "}
          <span>{"Rs " + numeral(expensesTotal).format("0,0")}</span>.
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesTotal: expensesTotal(selectExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
