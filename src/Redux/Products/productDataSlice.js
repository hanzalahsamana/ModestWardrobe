
"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: true,
  error: null,
};

export const productDataSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProductData, setLoading, setError } = productDataSlice.actions;

export default productDataSlice.reducer;
