import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  starships: [],
  error: null,
};

export const fetchStarships = createAsyncThunk("starships/fetchStarships", async () => {
  const response = await axios.get("https://swapi.dev/api/vehicles/");
  return response.data.results;
});

const starshipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStarships.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchStarships.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.starships = state.starships.concat(action.payload);
    },
    [fetchStarships.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default starshipsSlice.reducer;

export const selectAllStarships = (state) => state.starships.starships;

export const selectStarshipByName = (state, starshipName) =>
  state.starships.starships.find((starship) => starship.name === starshipName);
