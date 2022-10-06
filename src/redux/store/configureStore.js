import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../country/country';
import countryDetailsReducer from '../countryDetails/countryDetails';
import countrySpotlightReducer from '../countrySpotlight/countrySpotlight';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryData: countryDetailsReducer,
    countrySpotlight: countrySpotlightReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 250 },
    serializableCheck: { warnAfter: 250 },
  }),
});

export default store;
