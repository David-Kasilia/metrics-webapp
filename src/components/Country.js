/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/country/country';

const Country = () => {
  const { countriesList } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countriesList.length) {
      dispatch(fetchCountries());
    }
  }, []);

  console.log(countriesList);

  return (
    <div>
      {countriesList.map((country) => (
        <div key={uuid()}>
          <h3>{country.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Country;
