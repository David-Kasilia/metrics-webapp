import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Country from '../components/Country';
import store from '../redux/store/configureStore';

describe('Countries List Component', () => {
  it('should render countries when the api responds', async () => {
    render(
      <Provider store={store}>
        <Country />
      </Provider>,
    );
  });
});
