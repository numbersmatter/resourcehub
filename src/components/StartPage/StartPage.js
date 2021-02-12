import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Program from '../ProgramInfo/Program';
import FindResource from '../FindResources/FindResources';
import Login from '../Login/Login';


const StartPage = () => {
    return(
      <>
        <NavBar />
        <Switch>
            <Route 
              exact 
              path="/" 
              render={(props) => <FindResource {...props} />} 
            />
            <Route 
              exact
              path="/programs/:program_ID"
              render={(props) => <Program {...props} />}
            />
            <Route 
              exact
              path="/login"
              render={(props) => <Login {...props} /> }
            />


          </Switch>
      </>
    )
}

export default StartPage;