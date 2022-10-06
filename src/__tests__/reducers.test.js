import countriesReducer from '../redux/country/country';
import countryDetailsReducer from '../redux/countryDetails/countryDetails';
import countrySpotlightReducer from '../redux/countrySpotlight/countrySpotlight';

describe('countriesReducer', () => {
  it('should return the initial state', () => {
    const expected = { countriesList: [] };

    const result = countriesReducer(undefined, { countriesList: [] });

    expect(result).toEqual(expected);
  });
});

describe('countryDetailsReducer', () => {
  it('should return the initial state', () => {
    const expected = { countryDetailsList: [] };

    const result = countryDetailsReducer(undefined, { countryDetailsList: [] });

    expect(result).toEqual(expected);
  });
});

describe('countrySpotlightReducer', () => {
  it('should return the initial state', () => {
    const expected = { countrySpotlight: [] };

    const result = countrySpotlightReducer(undefined, { countrySpotlight: [] });

    expect(result).toEqual(expected);
  });
});
