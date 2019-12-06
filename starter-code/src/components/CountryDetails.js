import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';
import CountryList from './CountryList';

function getCountryNames(cca3Array) {
  const result = cca3Array.map(cca3 => {
    const country = countries.find(countryObj => countryObj.cca3 === cca3);
    return country;
  });

  return result;
}

export default function CountryDetails(props) {
  console.log(props);
  const { countryId } = props.match.params;

  const currentCountry = countries.find(country => country.cca3 === countryId);

  console.log(currentCountry);
  const capital = currentCountry.capital.join(', ');
  const { area, borders } = currentCountry;
  const borderCountries = getCountryNames(borders);

  //  const bordersInitialsArr = props.countryArr[countryId].borders;

  return (
    <div className="country-details">
      <div className="country-list">
        <CountryList />
      </div>
      <div className="coutry-borders">
        <h1>{}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borderCountries.map((countryObj, i) => {
                    return (
                      <Link to={`/details/${countryObj.cca3}`} key={i}>
                        <p>{countryObj.name.official}</p>
                      </Link>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
