import { fetchCountriesFromApi } from '../__mocks__/api';

beforeEach(() => {
  fetch.resetMocks();
});

it('should display country name', async () => {
  fetch.mockResponse(JSON.stringify([{
    name: {
      common: 'Kenya',
    },
  }]));

  const name = await fetchCountriesFromApi('Kenya');

  expect(name).toEqual([{ name: { common: 'Kenya' } }]);
});
