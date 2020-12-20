import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';

import Home from './pages/home';
import Repository from './pages/repository';
import store from './store/store';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:companyName/:repositoryId" component={Repository} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
