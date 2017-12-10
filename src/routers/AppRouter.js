import React from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;