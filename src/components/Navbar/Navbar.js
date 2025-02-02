"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { MdArrowDropDown, MdLogin, MdLogout } from "react-icons/md";

import { useStateProvider } from "@/context/StateContext";
import { isLoggedIn } from "@/hooks/helpers";
import logo from "../../../assets/logo.jpg";
import { showSuccessToast } from "../CustomToast";
import LanguageCurrency from "../Modals/LanguageCurrency";
import Sidebar from "../SideBar/Sidebar";

const Navbar = () => {
  const [{userInfo}] = useStateProvider();
  
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const router = useRouter();
  const navigateToLogin = () => {
    router.push("/login");
  };

  const handleLogout = async () => {
    Cookies.remove("access_token");
    signOut();
    showSuccessToast("Session logged out successfully!");
    router.replace("/login");
  }

  
  return (
    <div className="bg-white text-primary relative border-b-2 shadow-md">
      <div className="w-[94%] lg:w-[95%] mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <Link href="/" className="font-bold text-xl ">
            <Image
              src={logo}
              alt="logo"
              className="w-24 h-20 lg:w-24 lg:h-24 "
            />
          </Link>

          {/*Navbar Link */}
          <div className="hidden md:flex space-x-6 font-semibold text-sm">
            <Link href="/tutors" className="text-primary">
              Find tutors
            </Link>
            <Link href="/contact" className="text-primary">
              Contact Us
            </Link>
            <Link href="/register?mode=tutor" className="text-primary">
              Become a tutor
            </Link>
          </div>
        </div>

        {/*SubNavigation */}
        <div className="hidden md:flex items-center justify-between space-x-12">
          <div className="flex items-center gap-5">
            <AiOutlineQuestionCircle className="text-xl" />

            {isLoggedIn() ? (
              <div className="flex items-center space-x-2">
                <button
                  className="px-4 py-2 flex items-center gap-2 text-sm"
                >
                  {userInfo?.full_name}
                  <span className="">
                    <MdArrowDropDown className="" />
                  </span>
                </button>

                <button
                  onClick={handleLogout}
                  className="border-2 border-black px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <span className="">
                    <MdLogout className="" />
                  </span>
                  Log out
                </button>
              </div>
            ) : (
              <button
                onClick={navigateToLogin}
                className="border-2 border-black px-4 py-2 rounded-md flex items-center gap-2"
              >
                <span className="">
                  <MdLogin className="" />
                </span>
                Log In
              </button>
            )}
          </div>
        </div>

        {/*menu bar for small screen size */}
        <div className="flex items-center md:hidden gap-4">
          <button onClick={toggleSidebar} className=" text-2xl">
            <FiMenu className="border w-7 h- rounded-sm text-[#000]" />
          </button>
        </div>
      </div>
      {openDropdown && (
        <div className="absolute right-60 top-14 z-30">
          <LanguageCurrency />
        </div>
      )}

      {/* Sidebar Section */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform z-20 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
