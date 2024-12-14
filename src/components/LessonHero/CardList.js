"use client";
import React, { useEffect, useState } from "react";

import Card from "./Card";

const CardList = ({tutors}) => {

  return (
    <section className="lg:w-[70%] mx-auto">
      <div className="grid grid-cols-1 gap-4">
        {tutors?.map((tutor) => (
          <Card
            key={tutor.id}
            {...tutor.profile}
            full_name={tutor.full_name}
            profile_picture={tutor.image}
            id={tutor.id}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
