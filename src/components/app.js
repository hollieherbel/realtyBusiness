import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './navigation/navigation';
import Home from './pages/home';
import Listings from './pages/listings';
import About from './pages/about';
import Contact from './pages/contact';


export default class App extends Component {
  
  
  
  
  
  
  render() {
    return (
      <div className='app'>
      <Router>
        <Navigation />
          
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listings" component={Listings} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
     </Router> 



      </div>
    );
  }
}
