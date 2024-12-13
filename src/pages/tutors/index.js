import React, { useEffect, useState } from "react";
import CardList from "@/components/LessonHero/CardList";
import Filters from "@/components/LessonHero/Filters";
import Mainlayout from "@/components/Mainlayout";
import Client from "@/context/Client";
import { sendError } from "@/hooks/helpers";
import { PageSEO } from "@/hooks/SEO";
import siteSettings from "@/hooks/siteSettings";
import { UseAuth } from "@/hooks/UseAuth";

const Index = () => {
  const [tutors, setTutors] = useState([]);
  const [filters, setFilters] = useState({
    subject: "",
    price: "",
    state: "",
    availability: "",
    search: "",
  });

  UseAuth({
    middleware: "guest",
    redirectIfAuthenticated: "",
  });

  // Fetching tutor data
  const handleFetchTutors = async () => {
    try {
      Client()
        .get("/all/tutors")
        .then((response) => {
          const { data } = response;
          setTutors(data?.data);
        })
        .catch((error) => {
          const errorMessage = sendError(error);
          console.log(errorMessage);
        });
    } catch (error) {
      const errorMessage = sendError(error);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    handleFetchTutors();
  }, []);

  // Handle filter input change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Filter tutors based on filter values
  const filteredTutors = tutors.filter((tutor) => {
    return (
      (filters.subject === "" ||
        tutor.profile.subjects.some((subject) =>
          subject.toLowerCase().includes(filters.subject.toLowerCase())
        )) &&
      (filters.price === "" ||
        tutor.profile.hourly_rate.toString().includes(filters.price)) &&
      (filters.state === "" ||
        (tutor.profile.state &&
          tutor.profile.state
            .toLowerCase()
            .includes(filters.state.toLowerCase()))) &&
      (filters.availability === "" ||
        tutor.profile.availability_schedule.some((schedule) =>
          schedule.toLowerCase().includes(filters.availability.toLowerCase())
        )) &&
      (filters.search === "" ||
        tutor.full_name.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <Mainlayout>
      <PageSEO
        title={`Find tutors on - ${siteSettings.title}`}
        description={siteSettings.description}
      />
      <div className="bg-white min-h-screen p-6 text-black">
        <h2 className="text-3xl text-center pt-4">
          Meet With Our Professional Teachers
        </h2>
        <div className="bg-primary h-1 w-20 mx-auto mb-4"></div>

        {/* Filters Component */}
        <Filters filters={filters} onFilterChange={handleFilterChange} />

        <div className="w-[70%] mx-auto pb-5">
          <h2 className="text-2xl font-bold mt-6">
            {filteredTutors.length} English teachers available
          </h2>
        </div>

        {/* CardList Component */}
        <CardList tutors={filteredTutors} />
      </div>
    </Mainlayout>
  );
};

export default Index;
