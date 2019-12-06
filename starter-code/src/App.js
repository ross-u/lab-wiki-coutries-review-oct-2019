import React, { Component } from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CountryList />
        <Switch>
          <Route exact path="/" component={CountryList} />
          <Route exact path="/details/:countryId" component={CountryDetails} />
          {/* <Route
            exact
            path="/details/:countryId"
            render={props => (
              <CountryDetails
                {...props}
                countryArr={this.state.countriesArray}
              /> */}
          )} />
        </Switch>
        ;
      </div>
    );
  }
}

export default App;
