export const fetchCountriesFromApi = () => fetch('https://restcountries.com/v3.1/name/kenya').then((resp) => {
  if (resp.status === 200) return resp.json();
  throw new Error('Invalid Response');
});

export default fetchCountriesFromApi;
