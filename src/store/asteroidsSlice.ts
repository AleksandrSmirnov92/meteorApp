import { createSlice } from "@reduxjs/toolkit";
import { Asteroid, Store } from "@/types";
const initialState: Store | null = { asteroids: [] };

const asteroidsSlice = createSlice({
  name: "asteroids",
  initialState,
  reducers: {
    addAsteroids(state, action: { type: string; payload: Asteroid[] }) {
      state.asteroids = action.payload;
      // console.log(state);
      console.log(action.payload);
    },
  },
});
export default asteroidsSlice.reducer;
export const { addAsteroids } = asteroidsSlice.actions;
