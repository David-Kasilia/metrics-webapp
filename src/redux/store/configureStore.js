import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../country/country';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 250 },
    serializableCheck: { warnAfter: 250 },
  }),
});

export default store;
