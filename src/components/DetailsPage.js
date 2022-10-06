/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { fetchCountriesDetails } from '../redux/countryDetails/countryDetails';
import '../App.css';
import '../index.css';

const DetailsPage = () => {
  const { countryDetailsList } = useSelector((state) => state.countryData);
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    dispatch(fetchCountriesDetails(state));
  }, []);

  return (
    <div className="country-details-container">
      {countryDetailsList.map((country) => (
        <div className="country-details-card" key={country.id}>
          <div className="head-details">
            <img className="flag" src={country.flags.svg} alt="Flag" />
            <h2 className="common-name">{country.name.common}</h2>
          </div>
          <div className="population-stats">
            <h2 className="stats-title">COUNTRY DETAILS BREAKDOWN</h2>
          </div>
          <h2 className="official-name">
            Official Country Name:
            {country.name.official}
          </h2>
          <h3 className="capital">
            Capital City:
            {country.capital}
          </h3>
          <h3 className="population2">
            Population:
            {country.population}
          </h3>
          <h3 className="area">
            Area in Kilometers:
            {country.area}
          </h3>
          <h3 className="region">
            Country Region:
            {country.region}
          </h3>
          <h3 className="subregion">
            Country Subregion:
            {country.subregion}
          </h3>
          <h3 className="timezone">
            Country Time Zone:
            {country.timezones}
          </h3>
          <h3 className="week">
            Start Of The Week:
            {country.startOfWeek}
          </h3>
          <h3 className="googleMap Link">
            <Link to={country.maps.googleMaps}>
              Country On Google Map
            </Link>
          </h3>
          <h3 className="continent">
            This Country is in:
            {country.continents}
          </h3>
          <h3 className="cca2">
            {country.cca2}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
