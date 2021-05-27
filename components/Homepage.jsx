import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SideNavBar from './SideNavBar';
import CurrentList from './CurrentList';
import PurchasedList from './PurchasedList';
import EatenList from './EatenList';
import DisposedList from './DisposedList';

function Homepage() {
  return (
    <div className="App">
      <SideNavBar />


      <Switch>
        <Route component={CurrentList} exact path="/homepage" />
        <Route component={PurchasedList} exact path="/purchased" />
        <Route component={EatenList} exact path="/eaten" />
        <Route component={DisposedList} exact path="/disposed" />
      </Switch>
    </div>
  );
}

export default Homepage;
