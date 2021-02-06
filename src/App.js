import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import StartPage from './components/StartPage/StartPage';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={ history }>
      <StartPage />

    </Router>
  
  );
}

export default App;
