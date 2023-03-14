import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/dragons');
  return response.data;
});

const dragonSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.fulfilled, (state, action) => action.payload);
  },
});

export const selectDragons = (state) => state.dragons;

export default dragonSlice.reducer;
