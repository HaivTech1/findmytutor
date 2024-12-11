import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaTimes, FaUserAlt } from "react-icons/fa";

const Sidebar = ({ toggleSidebar }) => {

  return (
    <section className="bg-[#fff] h-full w-[250px] lg:w-[320px] border-r">
      <div className="flex flex-col h-full max-md:items-stretch w-full">
        <div>
          <div className="flex items-center justify-between m-2 border-b border-gray-300">
            <div className="flex items-center gap-2 pb-3 mt-2">
              <div className="bg-gray-100">
                <FaUserAlt className="border w-7 h-7 p-2" />
              </div>
              <Link href="/login">Log In</Link>
            </div>
            <button onClick={toggleSidebar}>
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start px-3 py-4 gap-8 font-semibold">
          <Link href="/findMyTutor" className="text-primary">
            Find tutors
          </Link>
          <Link href="/contact" className="text-primary">
            Contact Us
          </Link>
          <Link href="/" className="text-primary">
            Become a tutor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
