import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import EndPoint from 'containers/EndPoint';
import Input from 'containers/Input';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={EndPoint}>
      <Route path="input" component={Input} />
    </Route>
  </Router>
);
