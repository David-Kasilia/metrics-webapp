/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountrySpotlight } from '../redux/countrySpotlight/countrySpotlight';
import Country from './Country';
import '../App.css';
import '../index.css';

const HomePage = () => {
  const { countrySpotlight } = useSelector((state) => state.countrySpotlight);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountrySpotlight());
  }, []);

  return (
    <div className="countries-container">
      {countrySpotlight.map((country) => (
        <div className="spotlight-card" key={country.id}>
          <div className="flag-spot-container">
            <img className="spot-flag" src={country.flags.svg} alt="Flag" />
          </div>
          <div className="spot-details">
            <h2 className="spot-name">{country.name.common}</h2>
            <h3 className="spot-capital">
              Capital City:
              {country.capital}
            </h3>
            <h3 className="spot-population">
              Population:
              {country.population}
            </h3>
          </div>
        </div>
      ))}
      <div className="population-stats">
        <h2 className="stats-title">STATS BY COUNTRY POPULATION</h2>
      </div>
      <Country />
    </div>
  );
};

export default HomePage;
