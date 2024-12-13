import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import useSWR from "swr";

import Client from "@/context/Client";
import { reducerCases } from "@/context/constants";
import { useStateProvider } from "@/context/StateContext";
import { isEmailVerified, isLoggedIn, sendError } from "./helpers";

export const UseAuth = ({
  middleware = "",
  redirectIfAuthenticated = "/",
} = {}) => {

  const router = useRouter();
  const [{}, dispatch] = useStateProvider();
  const [cookie, setCookie] = useCookies(["is_verified"]);

   const fetchUserInfo = async () => {
     try {
        console.log("login state is : " + isLoggedIn());
        if(!isLoggedIn()) return [];
       const res = await Client().get("/user");
       const userData = res?.data?.data;

       dispatch({ type: reducerCases.SET_USER_INFO, userInfo: userData });

       setCookie("is_verified", userData?.is_verified ? 1 : 0, {
         path: "/",
         sameSite: true,
       });

       return userData;
     } catch (error) {
       console.log(sendError(error));
       throw error;
     }
   };

   const { data: user, error } = useSWR(
     isLoggedIn() ? "/user" : null,
     fetchUserInfo
   );


  useEffect(() => {

    if (!middleware) return;

    const handleAuth = () => {
      console.log("called");
      console.log(isLoggedIn());
      
      switch (middleware) {
        case "guest":
          if (redirectIfAuthenticated && isLoggedIn()) {
            router.push(redirectIfAuthenticated);
          }
          break;

        case "wallet_verification":
          if (walletVerification === "false") {
            toast.error("You have to complete your KYC to access this page.", {
              duration: 4000,
            });
            router.push(redirectIfAuthenticated);
          }
          break;

        case "verify":
          if (!isLoggedIn()) {
            router.push("/login");
          } else if (isLoggedIn() && isEmailVerified()) {
            router.push(redirectIfAuthenticated);
          }
          break;

        case "auth":
          if (!isLoggedIn()) {
            router.push(redirectIfAuthenticated);
          }
          break;

        default:
          break;
      }
    };

    handleAuth();
  }, [middleware, redirectIfAuthenticated]);

};