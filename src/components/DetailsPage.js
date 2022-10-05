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
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
