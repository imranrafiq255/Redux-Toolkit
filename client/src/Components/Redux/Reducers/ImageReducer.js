import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  imageData: null,
  error: null,
};

const imageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("imagesRequest", (state) => {
      state.loading = true;
    })
    .addCase("imagesSuccess", (state, action) => {
      state.loading = false;
      state.imageData = action.payload;
      state.error = null;
    })
    .addCase("imagesFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default imageReducer;
