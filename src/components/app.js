import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './homepage/navigation';
import Listings from './homepage/listings';
import Home from './homepage/home';

export default class App extends Component {
  
  
  
  
  
  
  render() {
    return (
      <div className='app'>
      <Router>
          <Home />
          <Navigation />
        <Switch>
          <Route path="/listings" component={Listings} />
        </Switch>
     </Router> 



      </div>
    );
  }
}
