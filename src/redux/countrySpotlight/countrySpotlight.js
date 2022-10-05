/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const COUNTRY_SPOTLIGHT = 'countriesData/country/country/COUNTRY_SPOTLIGHT';

// Countries Rest Api
const spotlightApi = 'https://restcountries.com/v3.1/name/kenya';

// Initial state
const initialState = {
  countrySpotlight: [],
};

// Action Creators
export const fetchCountrySpotlight = createAsyncThunk(
  COUNTRY_SPOTLIGHT,
  async (args, { dispatch }) => {
    const response = await fetch(`${spotlightApi}`);
    const data = await response.json();
    const countries = Object.keys(data).map((key) => {
      const country = data[key];
      return {
        id: key,
        ...country,
      };
    });
    dispatch({
      type: COUNTRY_SPOTLIGHT,
      payload: countries,
    });
    return countries;
  },
);

const countrySpotlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_SPOTLIGHT:
      return {
        ...state,
        countrySpotlight: action.payload,
      };
    default:
      return state;
  }
};

export default countrySpotlightReducer;
