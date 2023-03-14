import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rocketSlice';
import missionsReducer from './Missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
