/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
export const fetchSpotlight = (text, id) => {
  return {
    type: 'FETCH_SPOTLIGHT',
    text,
    id,
  };
};

export const fetchCountry = (id) => {
  return {
    type: 'FETCH_COUNTRY',
    id,
  };
};

export const fetchCountries = () => {
  return {
    type: 'FETCH_COUNTRIES',
  };
};
