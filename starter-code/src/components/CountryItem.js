import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryItem extends Component {
  render() {
    console.log('props', this.props);

    return (
      <Link to={`/details/${this.props.country.cca3}`}>
        <p>
          <strong>{this.props.country.name.common}</strong>
        </p>
      </Link>
      //    { this.props.myfancykey }
    );
  }
}

export default CountryItem;
