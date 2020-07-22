import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './navigation/navigation';
import Home from './pages/home';
import Listings from './pages/listings';
import About from './pages/about';
import Contact from './pages/contact';






export default class App extends Component {
  constructor(props) {
    super(props) 
      this.state={
        listingList: [],
        deleteListing: false,
        address: ''

      }

      this.getListings = this.getListings.bind(this)
      
  }

    componentDidMount() {
      this.getListings()
    }


    getListings() {
        fetch("http://127.0.0.1:5000/listing/get", { method: "GET" })
        .then(response => response.json())
        .then(data => this.setState({ listingList: data }))
        .catch(error => console.log(error))
    }



    
  




  render() {
    return (
      <div className='app'>
      <Router>
        <Navigation />
          <Switch>
          <Route exact path="/"component={Home} />
          <Route exact path="/listings"
          render={() => <Listings listingList={this.state.listingList} />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
     </Router> 
      </div>
    );
  }
}