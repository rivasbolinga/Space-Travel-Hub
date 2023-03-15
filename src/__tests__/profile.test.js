import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Profile from '../components/profile/Profile';

test('renders Profile component without crashing', () => {
  render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );
});
