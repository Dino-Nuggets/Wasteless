import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';


function App() {
  return (
    <div className="App">
      
      

      <Switch>
        <Route component={SignUp} exact path="/" />
        <Route component={Login} exact path="/login" />
      
      </Switch>
    </div>
  );
}

export default App;
