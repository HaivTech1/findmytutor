import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { FaGraduationCap, FaLocationArrow } from "react-icons/fa";

import { limitText } from "@/hooks/helpers";
import siteSettings from "@/hooks/siteSettings";
import BookingModal from "../Modals/BookingModal";

const Card = ({
  id,
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);

  const toggleBookingModal = () => {
    setBookingModal(!bookingModal);
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="relative border w-full border-black text-black rounded-md p-4 grid grid-cols-1 gap-1 md:flex md:justify-between">
      <div className="flex flex-col lg:flex-row gap-3 w-full sm:w-[80%]">
        <img
          src={profile_picture}
          alt={`${full_name}'s profile`}
          className="w-32 h-32 rounded-md object-cover"
        />
        {/*Tutor details */}
        <div className="flex flex-wrap gap-4 text-black">
          <div>
            <h3 className="text-lg font-bold">{full_name}</h3>
            <p className="text-sm text-gray-600 flex gap-2 items-center">
              <span className="text-[13px] text-[#19549d] font-semibold">
                State:
              </span>
              <span className="text-xs">{state}</span>
            </p>
            <p className="text-sm text-gray-600 flex gap-2 items-center">
              <span className="text-[13px] text-[#19549d] font-semibold">
                Subjects:
              </span>
              <span className="text-xs"> {subjects.join(", ")}</span>
            </p>

            <p className="text-gray-600 w-[60%]">
              <span className="text-[13px] text-[#19549d] font-semibold">
                Certificate:{" "}
              </span>
              <span className="text-xs">{qualifications}</span>
            </p>
            <p className="text-gray-600 lg:w-[50%]">
              <span className="text-[13px] text-[#19549d] font-semibold">
                Bio:{" "}
              </span>
              <span className="text-xs">
                {isExpanded ? bio : `${bio.slice(0, 90)}...`}
              </span>
              <button
                onClick={toggleReadMore}
                className="text-[black] text-xs font-semibold ml-1 hover:underline"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </p>

            <p className="mt-2">
              <span className="text-[13px] text-[#19549d] font-semibold">
                Experience:{" "}
              </span>
              <span className="text-xs">
                {experience_years} years of experience
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*button toggle */}
      <div className="flex flex-col justify-between gap-4 ">
        <div className="">
          <p className="text-black text-sm font-bold">
            <span className="font-semibold">Payment:</span>{" "}
            <span className="text-red-500">
              {siteSettings.currency}
              {hourly_rate}
              /hr
            </span>
          </p>
          <h4 className="text-sm font-semibold underline">Teaching Hours:</h4>
          <ul className="list-disc list-inside text-xs text-gray-600">
            {Object.entries(availability_schedule).map(([day, time]) => (
              <li key={day}>{time}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <button
            onClick={toggleBookingModal}
            className="bg-primary text-white px-2 py-2 rounded-lg"
          >
            Book A Session
          </button>
        </div>
      </div>
      {bookingModal && (
        <BookingModal
          toggleBookingModal={toggleBookingModal}
          profile_picture={profile_picture}
          full_name={full_name}
          tutorId={id}
          hourly_rate={hourly_rate}
        />
      )}
    </div>
  );
};

export default Card;
