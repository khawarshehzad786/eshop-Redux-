import { configureStore } from "@reduxjs/toolkit";
import showData from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    show: showData 
  },
});