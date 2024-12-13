import axios from "axios";
import { baseUrl } from "../Settings";


const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
