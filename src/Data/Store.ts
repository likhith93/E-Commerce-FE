import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// TypeScript helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
