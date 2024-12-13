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


export const ValidateInput = (data, keys) => {
  for (let key of keys) {
    if (
      key === "doc_Specialty" &&
      data["category"].toLowerCase() !== "doctor"
    ) {
      continue;
    }

    if (
      !data[key] ||
      (typeof data[key] === "string" && data[key].trim() === "") ||
      (Array.isArray(data[key]) && data[key].length === 0) ||
      (typeof data[key] === "object" &&
        !Array.isArray(data[key]) &&
        Object.keys(data[key]).length === 0)
    ) {
      return {
        status: false,
        message: `${key} is required and cannot be empty.`,
      };
    }
  }

  return {
    status: true,
    message: "All fields are valid.",
  };
};

export const limitText = (text, maxLength = 10) => {
  if (text?.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
};