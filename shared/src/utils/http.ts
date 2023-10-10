import axios from "axios";
import { BASE_PATH_BFF_API } from "./constants";

const http = () => {
  const instance = axios.create({
    baseURL: BASE_PATH_BFF_API,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return instance;
};

export default http();
