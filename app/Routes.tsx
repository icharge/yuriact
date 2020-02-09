import * as React from 'react';
import { Switch, Route } from 'react-router';
const routes = require('./constants/routes.json');
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import LoginPage from './containers/LoginPage';
import LobbyPage from './containers/LobbyPage';

export default () => (
  <App>
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.LOGIN} component={LoginPage} />
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.LOBBY} component={LobbyPage} />
    </Switch>
  </App>
);
