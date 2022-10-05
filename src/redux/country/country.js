import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const FETCH_COUNTRIES = 'countriesData/country/country/FETCH_COUNTRIES';

// Countries Rest Api
const api = 'https://restcountries.com/v3.1/all';

// Initial state
const initialState = {
  countriesList: [],
};

// Action Creators
export const fetchCountries = createAsyncThunk(
  FETCH_COUNTRIES,
  async (args, { dispatch }) => {
    const response = await fetch(api);
    const data = await response.json();
    const countries = Object.keys(data).map((key) => {
      const country = data[key];
      return {
        id: key,
        ...country,
      };
    });
    dispatch({
      type: FETCH_COUNTRIES,
      payload: countries,
    });
    return countries;
  },

);

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countriesList: action.payload,
      };

    default:
      return state;
  }
};

export default countriesReducer;
