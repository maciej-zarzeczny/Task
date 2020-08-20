import { configureStore } from "@reduxjs/toolkit";

import planetsReducer from "../features/planets/planetsSlice";
import starshipsReducer from "../features/starships/starshipsSlice";
import vehiclesReducer from "../features/vehicles/vehiclesSlice";

export default configureStore({
  reducer: {
    planets: planetsReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,
  },
});
