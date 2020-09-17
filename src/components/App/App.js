import React from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusinessList/BusinessList";
import Yelp from "../../util/yelp";

// THis is where the component representing a business is created


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, searchBy) {
    Yelp.search(term, location, searchBy).then(businesses => {
      this.setState({businesses: businesses})
    });
  };

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} /> 
      </div>
    );
  }
}

//
export default App;
