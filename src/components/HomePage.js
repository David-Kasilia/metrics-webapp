/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountrySpotlight } from '../redux/countrySpotlight/countrySpotlight';
import Country from './Country';

const HomePage = () => {
  const { countrySpotlight } = useSelector((state) => state.countrySpotlight);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountrySpotlight());
  }, []);

  console.log(countrySpotlight);
  return (
    <div className="spotlight">
      {countrySpotlight.map((country) => (
        <div className="spotlight-card" key={country.id}>
          <h2 className="spot-name">{country.name.common}</h2>
          <img className="spot-flag" src={country.flags.svg} alt="Flag" />
          <h2 className="spot-official-name">
            Official Country Name:
            {country.name.official}
          </h2>
          <h3 className="spot-capital">
            Capital City:
            {country.capital}
          </h3>
          <h3 className="spot-population">
            Population:
            {country.population}
          </h3>
          <h3 className="spot-area">
            Area in Kilometers:
            {country.area}
          </h3>
        </div>
      ))}
      <Country />
    </div>
  );
};

export default HomePage;
