import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketSlice';
import dragonReducer from './Dragons/dragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragons: dragonReducer,
  },
});

export default store;
