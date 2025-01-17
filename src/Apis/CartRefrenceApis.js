"use client";
import axios from "axios";
import BASE_URL from "../../config";
import { toast } from "react-toastify";

export const setCartDataApi = async (cartId) => {
  try {
    const response = await axios.get(`${BASE_URL}/getCartData?id=${cartId}`);
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
};

export const addCartDataApi = async (addedProduct , cartId) => {
  try {
    let url = `${BASE_URL}/addCart`;
    if (cartId && cartId !== 'undefined') {
        url += `?id=${cartId}`;
    }
    const response = await axios.post(url, addedProduct);
    console.log(response , "helloooo");
    
    localStorage.setItem("cartId", response.data.cartId);
    return response.data;
  } catch (error) {
    console.error(error)
  }
};

export const deleteCartDataApi = async (cartId, productId) => {
  try {
    let url = `${BASE_URL}/deleteCartProduct?id=${cartId}`;

    if (productId) {
      url += `&&productId=${productId}`;
    }
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};
