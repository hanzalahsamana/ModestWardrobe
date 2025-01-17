"use client";
import axios from "axios";
import BASE_URL from "../../config";
import { setError, setLoading, setProductData } from "@/Redux/Products/productDataSlice";

export const fetchProducts = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`${BASE_URL}/getProducts`);
    dispatch(setProductData(response.data));
    return response.data;
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
