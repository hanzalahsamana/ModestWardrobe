"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pagesContent: [],
  pagesLoading: true,
  error: null,
};

export const pagesContentSlice = createSlice({
  name: "pagesContent",
  initialState,
  reducers: {
    setPagesContent: (state, action) => {
      state.pagesContent = action.payload;
    },
    setLoading: (state, action) => {
      state.pagesLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const selectPageByType = (state, pageType) =>{
  return state.pagesContent?.pagesContent?.find((page) => page.type === pageType);
}

export const { setPagesContent, setLoading, setError } =
  pagesContentSlice.actions;

export const pagesContentReducer = pagesContentSlice.reducer;
