import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Redux Component
import store from 'store'; // Import your Redux store
import { Provider } from 'react-redux'; // Import Provider from react-redux

// core components
import Admin from 'layouts/Admin.js';
import RTL from 'layouts/RTL.js';
import Login from 'views/Login/Login';

import 'assets/css/material-dashboard-react.css?v=1.10.0';

ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/rtl" component={RTL} />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
