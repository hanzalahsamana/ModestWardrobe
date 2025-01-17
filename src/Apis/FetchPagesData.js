"use client";
import axios from "axios";
import BASE_URL from "../../config";
import { setError, setLoading, setPagesContent } from "@/Redux/PagesContent/PagesContentSlice";

export const fetchPagesContent = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`${BASE_URL}/getPages`);
    dispatch(setPagesContent(response.data));
    return response.data;
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};