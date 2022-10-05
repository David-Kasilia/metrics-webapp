/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const COUNTRY_DETAILS = 'countriesData/country/country/COUNTRY_DETAILS';

// Countries Rest Api
const dataApi = 'https://restcountries.com/v3.1/name';

// Initial state
const initialState = {
  countryDetailsList: [],
};

// Action Creators
export const fetchCountriesDetails = createAsyncThunk(
  COUNTRY_DETAILS,
  async (name, { dispatch }) => {
    const response = await fetch(`${dataApi}/${name}`);
    const data = await response.json();
    const countries = Object.keys(data).map((key) => {
      const country = data[key];
      return {
        id: key,
        ...country,
      };
    });
    dispatch({
      type: COUNTRY_DETAILS,
      payload: countries,
    });
    return countries;
  },
);

const countryDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_DETAILS:
      return {
        ...state,
        countryDetailsList: action.payload,
      };
    default:
      return state;
  }
};

export default countryDetailsReducer;
