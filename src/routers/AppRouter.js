import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddExpensePage from './../components/AddExpensePage';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import EditExpensePage from './../components/EditExpensePage';
import Header from './../components/Header';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
