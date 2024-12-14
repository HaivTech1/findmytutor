"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Button = ({ text }) => {
  const router = useRouter();

  const navigateToTutoReg = () => {
    router.push("/register?mode=tutor");
  };

  return (
    <button
      onClick={navigateToTutoReg}
      className="bg-primary text-white mx-5 lg:mx-0 font-semibold px-8 py-3 border-2 border-black rounded-lg hover:bg-secondary"
    >
      {text}
    </button>
  );
};

export default Button;
