import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { LoaderIcon } from "react-hot-toast";

import { showErrorToast, showSuccessToast } from "@/components/CustomToast";
import Mainlayout from "@/components/Mainlayout";
import TextInput from "@/components/TextInput";
import Client from "@/context/Client";
import { reducerCases } from "@/context/constants";
import { useStateProvider } from "@/context/StateContext";
import { sendError } from "@/hooks/helpers";
import siteSettings from "@/hooks/siteSettings";
import { UseAuth } from "@/hooks/UseAuth";
import google from "../../assets/googles.svg";

const Login = () => {

   UseAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const router = useRouter();
  const {mode} = router.query;
  
  const [{userInfo}, dispatch] = useStateProvider();
  const [type, setType] = useState(mode ?? 'student');

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);

  const [errors, setErrors] = useState([]);
  const [cookie, setCookie] = useCookies(["access_token"]);

  const { data: session } = useSession();

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleSubmit = async () => {
    setErrors([]);
    setIsLoading(true);

    try {
      Client()
        .post("/login", inputs)
        .then((response) => {
          setIsLoading(false);

          const { data } = response;
          showSuccessToast(data.message);
          setCookie("access_token", data.access_token, {
            path: "/",
            maxAge: 3600,
            sameSite: true,
          });

          setCookie("is_verified", data.user.is_verified ? 1 : 0, {
            path: "/",
            sameSite: true,
          });

          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: data.user,
          });

          setTimeout(() => {
            router.push("/");
          }, 1500);
        })
        .catch((error) => {
          setIsLoading(false);
          const errorMessage = sendError(error);
          console.log(errorMessage);
          showErrorToast(errorMessage?.message ?? errorMessage?.error);
        });
    } catch (e) {
      setIsLoading(false);
      const errorMessage = sendError(e);
      console.log(errorMessage);
      showErrorToast("Networking error: " + errorMessage?.error);
    }
  };

  const handleGoogleLogin = (data) => {
    setIsLoadingGoogle(true);
    try {
      Client()
        .post("google_login", {
          email: data?.email,
          full_name: data?.name,
          profile_photo_path: data?.image,
          user_type: type,
        })
        .then((response) => {
          setIsLoadingGoogle(false);
          const {data} = response;

          setCookie("access_token", data.access_token, {
            path: "/",
            maxAge: 3600,
            sameSite: true,
          });

          setCookie("is_verified", data.user.is_verified ? 1 : 0, {
            path: "/",
            sameSite: true,
          });

          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: data.user,
          });

          if(type === "new_login"){
            router.replace("/setup");
          }else if (type === "old_login" && !data.profile) {
            router.replace("/setup");
          }else{
            router.replace("/");
          }
        })
        .catch((error) => {
          setIsLoadingGoogle(false);

          const errorMessage = sendError(error);
          showErrorToast(
            errorMessage?.message ??
              "There was an error connecting your sessioin."
          );
        });

    } catch (error) {
      const errorMessage = sendError(error);
      showErrorToast(errorMessage?.error ?? "There was an error connecting your sessioin.");
    }
  }

  useEffect(() => {
    if (session?.user) {
      handleGoogleLogin(session.user);
    }
  }, [session]);

  return (
    <Mainlayout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8">
          <h1 className="text-2xl font-bold mb-4">Log in</h1>

          {!mode && (
            <div className="text-start mb-4">
              <Link
                href="/login"
                className="text-black underline font-extralight hover:text-primary"
              >
                Sign up as a student
              </Link>
              <span className="px-2"> or</span>
              <Link
                href="/login?mode=tutor"
                className="text-black underline font-extralight hover:text-primary"
              >
                Sign up as a tutor
              </Link>
            </div>
          )}

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button
              onClick={signIn}
              className="w-full flex items-center justify-center font-semibold gap-2 py-2 px-4 border-2 border-black rounded-lg hover:bg-gray-100 transition"
            >
              <Image src={google} alt="google" width={30} height={30} />
              <p>Continue with Google</p>
              {isLoadingGoogle && <LoaderIcon />}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-black font-semibold">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Email and Password Fields */}
          <div className="mb-4 relative">
            <TextInput
              disabled={false}
              placeholder="Enter here"
              label="Email"
              onChange={(e) => handleOnChange(e.target.value, "email")}
            />
          </div>

          <div className="mb-4">
            <TextInput
              disabled={false}
              placeholder="Enter here"
              label="Password"
              password
              onChange={(e) => handleOnChange(e.target.value, "password")}
            />
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <Link
              href="#"
              className="text-black text-sm underline font-semibold hover:text-primary"
            >
              Forgot your password?
            </Link>
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2 rounded border-gray-300" />
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="flex items-center justify-center space-x-2 w-full py-3 px-5 bg-primary text-white border-2 border-black font-bold rounded-lg transition"
          >
            <p>Log in</p>
            {isLoading && <LoaderIcon />}
          </button>

          {/* Terms and Privacy */}
          <p className="text-sm text-center text-gray-500 mt-6">
            By clicking Log in or Continue with, you agree to{" "}
            <span className="text-xs font-semibold">{siteSettings.title}</span>{" "}
            <Link
              href="#"
              className="text-black text-xs underline font-semibold hover:text-primary"
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="text-black text-xs underline font-semibold hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </Mainlayout>
  );
};

export default Login;
