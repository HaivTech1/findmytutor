import { useEffect } from "react";
import { useRouter } from "next/router";

import { isEmailVerified, isLoggedIn } from "./helpers";

export const UseAuth = ({
  middleware = "",
  redirectIfAuthenticated = "/",
} = {}) => {
  const router = useRouter();

  useEffect(() => {
    if (!middleware) return;

    const handleAuth = () => {
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
  }, [middleware, redirectIfAuthenticated, router]);

   return {
    
   };
};