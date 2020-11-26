import Axios from "axios";
import { HTTP_METHODS } from "../types/global";

export const axios = Axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const createApiRequest = async (
  url: string,
  method: HTTP_METHODS,
  data
) => {
  try {
    const response = await axios({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const BaseImageUrl = "https://pokeres.bastionbot.org/images/pokemon";
