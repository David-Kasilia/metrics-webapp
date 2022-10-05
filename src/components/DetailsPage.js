/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
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
      Hello
    </div>
  );
};

export default DetailsPage;
