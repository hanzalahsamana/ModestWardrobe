import axios from "axios";
import BASE_URL from "../../config";

export const PostContactForm = async (contactData) => {
  try {
    let url = `${BASE_URL}/postContact`;
    const response = await axios.post(url, contactData);
    return response.message;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};