import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import Home from '../components/home';

describe('Check that home component renders corrrectly', () => {
  it('Renders  elements', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(screen.queryByText(/Countries/)).toBeNull();
  });
});
