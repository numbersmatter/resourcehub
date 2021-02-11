import React from 'react';
import { AuthProvider, useAuth } from "../../contexts/AuthContext"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Program from '../ProgramInfo/Program';
import FindResource from '../FindResources/FindResources';
import Signup from "../Auth/Signup"
import Login from "../Auth/Login";


const StartPage = () => {
  //const { currentUser, logout } = useAuth();

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
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
            </Switch>
        
      </>
    )
}

export default StartPage;