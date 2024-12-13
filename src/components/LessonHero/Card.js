import React from "react";
import { StaticImageData } from "next/image";
import { FaGraduationCap, FaLocationArrow } from "react-icons/fa";

import { limitText } from "@/hooks/helpers";
import siteSettings from "@/hooks/siteSettings";

const Card = ({
  full_name,
  bio,
  hourly_rate,
  experience_years,
  state,
  profile_picture,
  qualifications,
  availability_schedule,
  subjects,
}) => {
  console.log(profile_picture);
  return (
    <div className="border w-full border-black text-black rounded-md p-4 grid grid-cols-1 gap-1 lg:flex lg:justify-between">
      <div className="flex flex-col lg:flex-row gap-3">
        <img
          src={profile_picture}
          alt={`${full_name}'s profile`}
          className="w-28 h-28 rounded-md object-cover"
        />
        {/*Tutor details */}
        <div className="flex gap-4 text-black">
          <div>
            <h3 className="text-lg font-bold">{full_name}</h3>
            <p className="text-sm text-gray-600 flex gap-2 items-center">
              <FaLocationArrow className="w-3 h-3 text-[#19549d]" />
              {state}
            </p>
            <p className="text-sm text-gray-600 flex gap-2 items-center">
              <FaGraduationCap className="w-4 h-4 text-[#19549d]" />
              {subjects}
            </p>

            <p className="text-gray-600 w-[60%]">
              <span className="text-[15px] text-[#19549d] font-semibold">
                Certificate:{" "}
              </span>
              {qualifications}
            </p>
            <p className="text-gray-600 lg:w-[60%]">
              <span className="text-[15px] text-[#19549d] font-semibold">
                Bio:{" "}
              </span>
              {limitText(bio, 150)}
            </p>
            <p className="mt-2">
              <span className="text-[15px] text-[#19549d] font-semibold">
                Experience:{" "}
              </span>
              <strong>{experience_years} years of experience</strong>
            </p>
          </div>
        </div>
      </div>

      {/*button toggle */}
      <div className="flex flex-col gap-2">
        <div className="">
          <p className="text-black font-bold">
            {" "}
            <span className="text-[16px] font-semibold">Service Fee:</span> {siteSettings.currency}
            {hourly_rate}
            /hr
          </p>
          <h4 className="text-[16px] font-semibold">Availability:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {Object.entries(availability_schedule).map(([day, time]) => (
              <li key={day}>{time}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Book trial lesson
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
