"use client";
import React from "react";

import Card from "./Card";
import Tutor2 from "../../../assets/HeroImage.jpg";
import Tutor1 from "../../../assets/PaidImage.jpg";

const tutorData = [
  {
    id: 1,
    full_name: "John Doe",
    email: "johndoe@example.com",
    phone_number: "123456789",
    profile_picture: Tutor2,
    type: "tutor",
    profile: {
      qualifications: "PhD in Mathematics",
      subjects: ["Mathematics", "Physics"],
      experience_years: 5,
      availability_schedule: {
        Monday: "9am-5pm",
        Wednesday: "1pm-6pm",
      },
      hourly_rate: 50.0,
      state: "New York, NY",
      bio: "Experienced mathematics tutor with a PhD.",
      teaching_mode: "online",
      verification_documents: [
        "http://findmytutor.haivtech.com.ng/storage/cert1.pdf",
        "http://findmytutor.haivtech.com.ng/storage/cert2.pdf",
      ],
    },
    created_at: "2024-12-09T12:34:56",
  },
  {
    id: 2,
    full_name: "Frances Nonso",
    email: "johndoe@example.com",
    phone_number: "123456789",
    profile_picture: Tutor1,
    type: "tutor",
    profile: {
      qualifications: "PhD in Mathematics",
      subjects: ["Mathematics", "Physics"],
      experience_years: 5,
      availability_schedule: {
        Monday: "9am-5pm",
        Wednesday: "1pm-6pm",
      },
      hourly_rate: 50.0,
      state: "New York, NY",
      bio: "Experienced mathematics tutor with a PhD.",
      teaching_mode: "online",
      verification_documents: [
        "http://findmytutor.haivtech.com.ng/storage/cert1.pdf",
        "http://findmytutor.haivtech.com.ng/storage/cert2.pdf",
      ],
    },
    created_at: "2024-12-09T12:34:56",
  },
];

const CardList = () => {
  return (
    <section className="w-[70%] mx-auto">
      <div className="grid grid-cols-1 gap-4">
        {/* {tutorData.map((tutor, index) => (
        <Card key={index} {...tutor} />
      ))} */}

        {tutorData.map((tutor) => (
          <Card
          key={tutor.id}
          {...tutor.profile} 
          full_name={tutor.full_name} 
          profile_picture={tutor.profile_picture}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
