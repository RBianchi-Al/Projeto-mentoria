import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispach = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
