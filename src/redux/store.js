import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketSlice';
import dragonReducer from './Dragons/dragonSlice';
import missionsReducer from './Missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    dragons: dragonReducer,
    missions: missionsReducer,
  },
});

export default store;
