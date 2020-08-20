import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  vehicles: [],
  error: null,
};

export const fetchVehicles = createAsyncThunk("vehicles/fetchVehicles", async () => {
  const response = await axios.get("https://swapi.dev/api/vehicles");
  return response.data.results;
});

const vehiclesSLice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVehicles.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchVehicles.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.vehicles = state.vehicles.concat(action.payload);
    },
    [fetchVehicles.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default vehiclesSLice.reducer;

export const selectAllVehicles = (state) => state.vehicles.vehicles;

export const selectVehicleByName = (state, vehicleName) =>
  state.vehicles.vehicles.find((vehicle) => vehicle.name === vehicleName);
