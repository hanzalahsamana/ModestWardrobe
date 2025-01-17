"use client";
import axios from "axios";
import BASE_URL from "../../config";
import { setcategories, setCategoryError, setCategoryLoading } from "@/Redux/Categories/categoriesSlice";

export const fetchCategories = async (dispatch) => {
  try {
    dispatch(setCategoryLoading(true));
    const response = await axios.get(`${BASE_URL}/getCategory`);
    dispatch(setcategories(response.data));
    return response.data;
  } catch (error) {
    dispatch(setCategoryError(error.message));
  } finally {
    dispatch(setCategoryLoading(false));
  }
};
