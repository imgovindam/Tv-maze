import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: " myMovieData",
  initialState: {
    data: [],
  },
  reducers: {
    addMovieData: (state, action) => {
      state.data = action.payload;
    },
    addPeopleData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { addMovieData, addPeopleData } = moviesSlice.actions;
export const dataReducer = moviesSlice.reducer;
