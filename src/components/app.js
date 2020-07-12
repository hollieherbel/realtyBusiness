import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './navigation/navigationModal';
import Home from './pages/home';
import Listings from './pages/listings';
import About from './pages/about';
import Contact from './pages/contact';


export default class App extends Component {
  constructor(props) {
    super(props) 
      this.state={
        listingList: []
      
      }
    
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

    renderListings() {
        return this.state.listingList.map(listing => {
            return <Listings 
            key={listing.id}
            address={listing.address}
            city={listing.city}
            state={listing.state}
            zipcode={listing.zipcode}
            />
        })
    }
  
  render() {
    return (
      <div className='app'>
      <Router>
        <Navigation />
          <Switch>
          <Route exact path="/"component={Home} />
          <Route path="/listings" onClick={this.renderListings} component={Listings} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
     </Router> 



      </div>
    );
  }
}
