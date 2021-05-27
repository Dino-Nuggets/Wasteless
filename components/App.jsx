import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Homepage from './Homepage'

import CurrentList from './CurrentList';
import PurchasedList from './PurchasedList';
import EatenList from './EatenList';
import DisposedList from './DisposedList';


function App() {
  return (
    <div className="signup">
     {/* <Homepage /> */}

      <Switch>
        <Route component={SignUp} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Homepage} exact path="/homepage" />
        {/* <Route component={CurrentList} exact path="/CurrentList" /> */}
        <Route component={PurchasedList} exact path="/purchased" />
        <Route component={EatenList} exact path="/eaten" />
        <Route component={DisposedList} exact path="/disposed" />


      </Switch>
    </div>
  );
}

export default App;
