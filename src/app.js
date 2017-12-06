import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Dashboard = () => (
  <div>
    Dashboard
  </div>
);

const CreateExpense = () => (
  <div>
    Create Expense
  </div>
);

const EditExpense = () => (
  <div>
    Edit Expense
  </div>
);

const HelpPage = () => (
  <div>
    Help Page
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Dashboard} exact={true} />
      <Route path="/create" component={CreateExpense} />
      <Route path="/edit" component={EditExpense} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));