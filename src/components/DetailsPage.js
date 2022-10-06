/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCountriesDetails } from '../redux/countryDetails/countryDetails';

const DetailsPage = () => {
  const { countryDetailsList } = useSelector((state) => state.countryData);
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    dispatch(fetchCountriesDetails(state));
  }, []);

  console.log(countryDetailsList);

  return (
    <div>
      {countryDetailsList.map((country) => (
        <div key={country.id}>
          <h2>{country.name.common}</h2>
          <img src={country.flags.png} alt="Flag" />
          <h3>{country.capital}</h3>
          <h3>{country.area}</h3>
          <h3>{country.population}</h3>
          <h3>{country.continents}</h3>
          <h3>{country.region}</h3>
          <h3>{country.subregion}</h3>
          <h3>{country.timezones}</h3>
          <h3>{country.name.official}</h3>
          <h3>{country.startOfWeek}</h3>
          <h3>{country.maps.googleMaps}</h3>
          <h3>{country.borders}</h3>
          <h3>{country.languages.ara}</h3>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
