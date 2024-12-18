import React from "react";
import Image from "next/image";

import PaidImage from "../../../assets/PaidImage.jpg";

const GetPaidSection = () => {
  return (
    <section className="lg:border border-black w-full lg:w-[80%] mx-auto mt-10 overflow-hidden">
      <div className="relative flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Layered Image Section */}
        <div className="w-[100%] lg:w-[40%] h-96 flex items-center justify-center relative ">
          {/* Base Image */}
          <div className="absolute -left-0 md:left-0 top-0 w-full h-full z-0">
            <Image
              src={PaidImage}
              alt="Get Paid to Teach Online"
              layout="fill"
              priority
            />
          </div>

          {/* First Layer */}
          <div className="relative left-8 md:left-10 top-0 w-full h-full z-0">
            <Image
              src={PaidImage}
              alt="Layer 1"
              layout="fill"
              className="rounded-lg"
            />
          </div>

          {/* Second Layer */}
          <div className="absolute left-16 md:left-20 top-0 w-full h-full z-0">
            <Image src={PaidImage} alt="Layer 2" layout="fill" />
          </div>
        </div>

        {/* Right: Content Section for large screen*/}
        <div className="w-full hidden lg:block lg:w-[55%] h-96 bg-primary p-6 lg:p-10 flex-col justify-center rounded-lg">
          <h2 className="text-2xl lg:text-6xl tracking-tighter font-bold text-white mb-4">
            Get paid to <br /> teach online
          </h2>
          <p className="text-white text-lg lg:text-lg mb-6">
            Connect with thousands of learners around the world and teach from
            your living room.
          </p>
          <button className="bg-black text-white py-3 px-6 rounded-lg text-lg hover:bg-gray-800 transition">
            Create a tutor profile now
          </button>
        </div>

        {/* Right: Content Section for small screen*/}
        <div className="w-full lg:hidden bg-primary p-6 lg:p-10 flex-col justify-center">
          <h2 className="text-3xl tracking-tighter font-bold text-white mb-4">
            Get paid to teach online
          </h2>
          <p className="text-white text-lg lg:text-lg mb-6">
            Connect with thousands of learners around the world and teach from
            your living room.
          </p>
          <button className="bg-black text-white py-3 px-12 rounded-lg text-lg hover:bg-gray-800 transition">
            Create a tutor profile now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetPaidSection;
