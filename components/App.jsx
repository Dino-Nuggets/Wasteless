import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Homepage from './Homepage'


function App() {
  return (
    <div className="App">



      <Switch>
        <Route component={SignUp} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Homepage} exact path="/homepage" />

      </Switch>
    </div>
  );
}

export default App;
