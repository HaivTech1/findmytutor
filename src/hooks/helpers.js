import cookie from "cookie";
import Cookies from "js-cookie";

export const sendError = (error) => {
  if (error?.response?.data) {
    return error.response.data;
  }
  return { status: false, error: error.message };
};

export const isLoggedIn = (reqCookies = null) => {
  if (!reqCookies) {
    return !!Cookies.get("access_token");
  }
  return !!cookie.parse(reqCookies).access_token;
};

export function isEmailVerified(reqCookies = null) {
  let status;
  if (!reqCookies) {
    const cookieValue = Cookies.get("is_verified");
    status = cookieValue !== undefined ? parseInt(cookieValue) : 0;
  } else {
    const parsedCookies = cookie.parse(reqCookies);
    status =
      parsedCookies.is_verified !== undefined
        ? parseInt(parsedCookies.is_verified)
        : 1;
  }
  return status === 1;
}
