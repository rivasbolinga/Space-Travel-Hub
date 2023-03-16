import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

const initialState = { dragons: [], toFetch: 'true' };
export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/dragons');
  return response.json();
});
const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    bookDragons: (state, { payload }) => {
      const newArr = state.dragons.map((dragonObj) => {
        if (dragonObj.id === payload) {
          if (dragonObj.isReserved === true) {
            return { ...dragonObj, isReserved: false };
          }
          return { ...dragonObj, isReserved: true };
        }
        return ({ ...dragonObj });
      });
      const newState = { ...state };
      return { ...newState, dragons: newArr };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      const newState = { ...state };
      const dragonsCard = [];
      action.payload.forEach((dragonObj) => {
        dragonsCard.push({
          id: dragonObj.id,
          name: dragonObj.name,
          type: dragonObj.type,
          description: dragonObj.description,
          image: dragonObj.flickr_images[0],
          isReserved: false,
        });
      });
      newState.dragons = dragonsCard;
      newState.toFetch = false;
      return newState;
    });
  },
});
export const selectAllDragons = createSelector(
  (state) => state.dragons.dragons,
  (dragons) => dragons,
);
export default dragonsSlice.reducer;
export const { bookDragons } = dragonsSlice.actions;
