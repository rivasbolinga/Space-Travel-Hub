import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

const initialState = { rockets: [], toFetch: 'true' };

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  return response.json();
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRockets: (state, { payload }) => {
      const newArr = state.rockets.map((rockObj) => {
        if (rockObj.id === payload) {
          if (rockObj.isReserved === true) {
            return { ...rockObj, isReserved: false };
          }
          return { ...rockObj, isReserved: true };
        }
        return ({ ...rockObj });
      });
      const newState = { ...state };
      return { ...newState, rockets: newArr };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const newState = { ...state };
      const rocketsCard = [];
      action.payload.forEach((rockObj) => {
        rocketsCard.push({
          id: rockObj.rocket_id,
          name: rockObj.rocket_name,
          description: rockObj.description,
          image: rockObj.flickr_images[0],
          isReserved: false,
        });
      });
      newState.rockets = rocketsCard;
      newState.toFetch = false;
      return newState;
    });
  },
});

export const selectAllRockets = createSelector(
  (state) => state.rockets.rockets,
  (rockets) => rockets,
);

export default rocketsSlice.reducer;
export const { bookRockets } = rocketsSlice.actions;
