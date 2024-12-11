import React from "react";
import { StaticImageData } from "next/image";

const Card = ({
  full_name,
  bio,
  hourly_rate,
  experience_years,
  state,
  profile_picture,
  qualifications,
  availability_schedule,
}) => {
  return (
    <div className="border border-black rounded-md p-4 flex justify-between gap-4">
      <div className="flex gap-3">
        <img
          src={profile_picture.src}
          alt={`${full_name}'s profile`}
          className="w-28 h-28 rounded-md object-cover"
        />
        {/*Tutor details */}
        <div className="flex gap-4 ">
          <div>
            <h3 className="text-lg font-bold">{full_name}</h3>
            <p className="text-sm text-gray-600">{state}</p>
            <p className="text-gray-600">{qualifications}</p>
            <p className="text-gray-600">{bio}</p>
            <p className="mt-2">
              <strong>{experience_years} years of experience</strong>
            </p>
          </div>

          <div className="">
            <p className="text-black font-bold">
              {" "}
              <span className="text-[16px] font-semibold">Service Fee:</span> ${hourly_rate}
              /hr
            </p>
            <h4 className="text-[16px] font-semibold">Availability:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {Object.entries(availability_schedule).map(([day, time]) => (
                <li key={day}>
                  {day}: {time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/*button toggle */}
      <div className="flex flex-col gap-2">
        <button className="bg-primary text-white px-4 py-2 rounded-lg">
          Book trial lesson
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-lg">
          Send message
        </button>
      </div>
    </div>
  );
};

export default Card;
