import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rockets from '../components/rockets/Rocket';
import '@testing-library/jest-dom';

const mockStore = configureMockStore([]);

describe('Rockets component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: '1',
            name: 'Rocket 1',
            description: 'A cool rocket',
            image: 'http://example.com/rocket1.jpg',
            isReserved: false,
          },
          {
            id: '2',
            name: 'Rocket 2',
            description: 'An even cooler rocket',
            image: 'http://example.com/rocket2.jpg',
            isReserved: false,
          },
        ],
      },
    });

    store.dispatch = jest.fn();
  });

  it('should render the component', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByText('Rocket 1')).toBeInTheDocument();
    expect(screen.getByText('Rocket 2')).toBeInTheDocument();
  });
});
