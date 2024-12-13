import React from "react";
import Cookies from "js-cookie";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaTimes, FaUserAlt } from "react-icons/fa";
import { MdLogin, MdLogout } from "react-icons/md";

import { useStateProvider } from "@/context/StateContext";
import { isLoggedIn } from "@/hooks/helpers";
import { showSuccessToast } from "../CustomToast";

const Sidebar = ({ toggleSidebar }) => {
  const [{ userInfo }] = useStateProvider();

  const router = useRouter();

   const handleLogout = async () => {
    Cookies.remove("access_token");
    await signOut();
    showSuccessToast("Session logged out successfully!");
    router.replace("/login");
  }

  return (
    <section className="bg-[#fff] text-primary h-full w-[250px] lg:w-[320px] border-r">
      <div className="flex flex-col h-full max-md:items-stretch w-full">
        <div>
          <div className="flex items-center justify-between m-2 border-b border-gray-300">
            {isLoggedIn() ? (
              <div>
                <div className="flex items-center gap-2 pb-3 mt-2">
                  <div className="bg-gray-100">
                    <MdLogout className="border w-7 h-7 p-2" />
                  </div>
                  <buttoon onClick={handleLogout} className="text-sm text-primary">
                    Log out
                  </buttoon>
                </div>

                <div className="flex items-center gap-2 pb-3 mt-2">
                  <div className="bg-gray-100">
                    <FaUserAlt className="border w-7 h-7 p-2" />
                  </div>
                  <Link href="/" className="text-sm text-black">
                    {userInfo?.full_name}
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center text-primary gap-2 pb-3 mt-2">
                <div className="bg-gray-100">
                  <MdLogin className="border w-7 h-7 p-2" />
                </div>
                <Link href="/login">Log In</Link>
              </div>
            )}

            <button onClick={toggleSidebar}>
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start px-3 py-4 gap-8 font-semibold">
          <Link href="/tutors" className="text-primary">
            Find tutors
          </Link>
          <Link href="/contact" className="text-primary">
            Contact Us
          </Link>
          <Link href="/login" className="text-primary">
            Become a tutor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
