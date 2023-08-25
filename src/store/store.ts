import { configureStore } from "@reduxjs/toolkit";
import asteroidsSlice from "../store/asteroidsSlice";
// import basketAsteroidsSlice from "../store/basketAsteroidsSlice";
const store = configureStore({
  reducer: {
    asteroids: asteroidsSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
