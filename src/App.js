import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import StartPage from './components/StartPage/StartPage';
import { AuthProvider } from './contexts/AuthContext';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={ history }>
      <AuthProvider>
        <StartPage />
      </AuthProvider>
    </Router>
  
  );
}

export default App;
