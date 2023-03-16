import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
});
export const joinMission = createAction('missions/joinMission');

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission: (state, action) => {
      const id = action.payload;
      return state.map((mission) => {
        if (mission.mission_id !== id) {
          return mission;
        }
        const newMission = { ...mission, joined: true };
        return newMission;
      });
    },
    leavingMission: (state, action) => {
      const id = action.payload;
      return state.map((mission) => {
        if (mission.mission_id !== id) {
          return mission;
        }
        return { ...mission, joined: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => action.payload);
  },
});

export const { leavingMission } = missionsSlice.actions;

export const selectMissions = (state) => state.missions;

export default missionsSlice.reducer;
