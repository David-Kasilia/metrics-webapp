import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../country/country';
import countryDetailsReducer from '../countryDetails/countryDetails';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryData: countryDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 250 },
    serializableCheck: { warnAfter: 250 },
  }),
});

export default store;
