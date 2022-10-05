/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
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
        <div key={country.id}>
          <h3>{country.name.common}</h3>
          <Link to={`/details/${country.name.common}`} state={country.name.common}>
            <button type="button">
              <BsArrowRightCircle />
            </button>
          </Link>
          <img src={country.flags.png} alt="Flag" />
          <h4>{country.population}</h4>
        </div>
      ))}
    </div>
  );
};

export default Country;
