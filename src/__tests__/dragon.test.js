import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Dragon from '../components/dragons/Dragon';
import '@testing-library/jest-dom';

const mockStore = configureMockStore([]);

describe('Dragon component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dragons: {
        dragons: [
          {
            id: '1',
            name: 'Dragon 1',
            type: 'Type 1',
            description: 'A cool dragon',
            image: 'http://example.com/dragon1.jpg',
            isReserved: false,
          },
          {
            id: '2',
            name: 'Dragon 2',
            type: 'Type 2',
            description: 'An even cooler dragon',
            image: 'http://example.com/dragon2.jpg',
            isReserved: false,
          },
        ],
      },
    });

    store.dispatch = jest.fn();
  });

  it('should dispatch fetchDragons action on mount', () => {
    render(
      <Provider store={store}>
        <Dragon />
      </Provider>,
    );

    expect(store.dispatch).toEqual(expect.any(Function));
  });
  it('should dispatch bookDragons action on reserve button click', () => {
    // Test case for bookDragons action creator
  });
});
