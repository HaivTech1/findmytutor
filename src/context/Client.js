import axios from "axios";
import * as cookie from "cookie";
import Cookies from "js-cookie";

export default function Client(context = null) {
  const accessToken = context
    ? cookie.parse(context?.req?.headers?.cookie || "").access_token
    : Cookies.get("access_token");

  const clientInstance = axios.create({
    baseURL: process.env.LIVE_BASE_URL,
    headers: accessToken ? { authorization: `Bearer ${accessToken}` } : {},
  });

  return clientInstance;
}
