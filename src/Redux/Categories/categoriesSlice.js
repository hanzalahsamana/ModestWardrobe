"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  categoryLoading: true,
  categoryError: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setcategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategoryLoading: (state, action) => {
      state.categoryLoading = action.payload;
    },
    setCategoryError: (state, action) => {
      state.categoryError = action.payload;
    },
  },
});

export const { setcategories, setCategoryLoading, setCategoryError } =
  categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
