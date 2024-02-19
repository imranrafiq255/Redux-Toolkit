import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./Reducers/ImageReducer";
export const store = configureStore({
  reducer: { images: imageReducer },
});
