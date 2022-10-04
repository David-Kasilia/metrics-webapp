import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../country/country';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
