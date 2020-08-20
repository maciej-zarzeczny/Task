import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  planets: [],
  error: null,
};

export const fetchPlanets = createAsyncThunk("planets/fetchPlanets", async () => {
  const response = await axios.get("https://swapi.dev/api/planets");
  return response.data.results;
});

const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPlanets.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPlanets.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.planets = state.planets.concat(action.payload);
    },
    [fetchPlanets.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default planetsSlice.reducer;

export const selectAllPlanets = (state) => state.planets.planets;

export const selectPlanetByName = (state, planetName) =>
  state.planets.planets.find((planet) => planet.name === planetName);
