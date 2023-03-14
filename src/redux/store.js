import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
