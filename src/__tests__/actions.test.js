import * as actions from '../__mocks__/actions';

describe('actions', () => {
  it('should have a type of FETCH_SPOTLIGHT', () => {
    const text = 'Kenya';
    const id = 1;
    const expectedAction = {
      type: 'FETCH_SPOTLIGHT',
      text: 'Kenya',
      id: 1,
    };

    const result = actions.fetchSpotlight(text, id);

    expect(result).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should have a type of FETCH_COUNTRY', () => {
    const id = 1;
    const expectedAction = {
      type: 'FETCH_COUNTRY',
      id: 1,
    };

    const result = actions.fetchCountry(id);

    expect(result).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should have a type of FETCH_COUNTRIES', () => {
    const expectedAction = {
      type: 'FETCH_COUNTRIES',
    };

    const result = actions.fetchCountries();

    expect(result).toEqual(expectedAction);
  });
});
