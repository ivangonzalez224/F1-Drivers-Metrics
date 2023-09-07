import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import HomePage from '../components/pages/Home';

jest.mock('axios');

describe('Home page', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
  });
});