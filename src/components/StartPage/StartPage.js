import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Program from '../ProgramInfo/Program';
import ResourceGrid from '../ResourceGrid/ResourceGrid';


const StartPage = () => {
    return(
      <>
        <NavBar />
        <Switch>
            <Route 
              exact 
              path="/" 
              render={(props) => <ResourceGrid {...props} />} 
            />
            <Route 
              exact
              path="/programs/:program_ID"
              render={(props) => <Program {...props} />}
              />


          </Switch>
      </>
    )
}

export default StartPage;