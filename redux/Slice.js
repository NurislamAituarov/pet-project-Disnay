import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchListMovie: [],
};

const watchListSlice = createSlice({
  name: 'watchListMovie',
  initialState,
  reducers: {
    addedList: (state, action) => {
      state.watchListMovie.push(action.payload);
    },
    deletedList: (state, action) => {
      console.log(action.payload);
      state.watchListMovie = state.watchListMovie.filter((item) => item.id !== action.payload);
    },
  },
});

const { actions, reducer } = watchListSlice;
export default reducer;
export const { addedList, deletedList } = actions;
