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
    <div>
      {countrySpotlight.map((country) => (
        <div key={country.id}>
          <h2>{country.name.common}</h2>
        </div>
      ))}
      <Country />
    </div>
  );
};

export default HomePage;
