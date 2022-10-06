/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/country/country';
import '../App.css';
import '../index.css';

const Country = () => {
  const { countriesList } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countriesList.length) {
      dispatch(fetchCountries());
    }
  }, []);

  return (
    <div className="country-container">
      {countriesList.map((country) => (
        <div className="country-card" key={country.id}>
          <div className="flag-container">
            <img src={country.flags.svg} alt="Flag" className="flag-img" />
          </div>
          <div className="country-stats">
            <h3 className="country-name">{country.name.common}</h3>
            <h4 className="population">
              Population :
              {country.population}
            </h4>
          </div>
          <div className="detailsLink">
            <button className="detailsBtn" type="button">
              <Link to={`/details/${country.name.common}`} state={country.name.common}>
                <BsArrowRightCircle />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
