import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import { Repository } from './pages/repository';
import store from './store/store';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:companyName/:repositoryId" element={<Repository />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
