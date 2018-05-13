import React from "react";
import { shallow } from "enzyme";

import { ExpenseSummary } from "../../components/ExpenseSummary";
import expenses from "../fixtures/expenses";

test("should correctly render ExpensesSummary with one expense", () => {
  const wrapper = shallow(
    <ExpenseSummary expenses={[expenses[0]]} expensesTotal={35} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expenses", () => {
  const wrapper = shallow(
    <ExpenseSummary expenses={expenses} expensesTotal={123456789} />
  );
  expect(wrapper).toMatchSnapshot();
});
