/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import fetchCountriesFromApi from './api';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCountriesFromApi()
      .then((data) => setCountries(data.results))
      .catch((e) => setError(true));
  }, []);

  return error ? (
    <div data-testid="fetch-error">Unable To fetch data</div>
  ) : (
    <div data-testid="fetch-success">
      {countries.map((country) => (
        <h2 key={country.id}>
          {country.cca2}
        </h2>
      ))}
    </div>
  );
};

export default Countries;
