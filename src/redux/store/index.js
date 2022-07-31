import { configureStore } from "@reduxjs/toolkit";
import vendorsListSlice from "./../slices/vendorsListSlice";

export const store = configureStore({
  reducer: {
    vendorsListSlice,
  },
});
