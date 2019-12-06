import React from 'react';
import CountryItem from './CountryItem';
import countries from './../countries.json';

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesArray: countries,
    };
  }
  render() {
    const { countriesArray } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countriesArray.map((oneCountry, index) => {
                return (
                  <CountryItem
                    key={index}
                    country={oneCountry}
                    myfancykey={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-7"></div>
        </div>
      </div>
    );
  }
}

export default CountryList;
