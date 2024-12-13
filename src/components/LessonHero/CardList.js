"use client";

import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Card from "./Card";
import getAllTutors from "@/lib/getAllTutors";

const CardList = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cookies] = useCookies(["access_token"]); 

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const token = cookies.access_token; 
        console.log("Cookies:", cookies);

        if (!token) {
          throw new Error("Access token is missing.");
        }

        const fetchedTutors = await getAllTutors(token); 
        setTutors(fetchedTutors.data); 
      } catch (err) {
        setError(err.message || "Failed to fetch tutors.");
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, [cookies]); 

  if (loading) return <p>Loading tutors...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="w-[70%] mx-auto">
      <div className="grid grid-cols-1 gap-4">
        {tutors.map((tutor) => (
          <Card
            key={tutor.id}
            {...tutor.profile}
            full_name={tutor.full_name}
            profile_picture={tutor.image} 
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
