import axios from "axios";
import BASE_URL from "../../config";

export const addOrderDataApi = async (orderDetail) => {
  try {
    let url = `${BASE_URL}/addOrderData`;
    const response = await axios.post(url, orderDetail);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};