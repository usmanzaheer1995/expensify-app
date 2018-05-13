import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import converter from "number-to-words";

import selectExpenses from "./../selectors/expenses";
import expensesTotal from "./../selectors/expenses-total";

export const ExpenseSummary = ({ expenses, expensesTotal }) => {
  const expenseWord = expenses.length === 1 ? "expense" : "expenses";
  if (expenses.length === 0) return <div />;
  return (
    <div>
      <h1>
        Viewing {converter.toWords(expenses.length)} {expenseWord} totaling{" "}
        {"Rs " + numeral(expensesTotal).format("0,0")}.
      </h1>
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
