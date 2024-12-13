import React, { useEffect, useState } from "react";

import CardList from "@/components/LessonHero/CardList";
import Filters from "@/components/LessonHero/Filters";
import Mainlayout from "@/components/Mainlayout";
import Client from "@/context/Client";
import { sendError } from "@/hooks/helpers";
import { PageSEO } from "@/hooks/SEO";
import siteSettings from "@/hooks/siteSettings";
import { UseAuth } from "@/hooks/UseAuth";
import withAuth from "@/hooks/withAuth";

const Index = () => {

  const [tutors, setTutors] = useState([]);

  UseAuth({
    middleware: "guest",
    redirectIfAuthenticated: ""
  });

  const handleFetchTutors = async () => {
    try {
      Client()
        .get("/all/tutors")
        .then((response) => {
          const { data } = response;
          setTutors(data?.data)
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
    handleFetchTutors()
  }, [])


  return (
    <Mainlayout>
      <PageSEO
        title={`Find tutors on - ${siteSettings.title}`}
        description={siteSettings.description}
      />

      <div className="bg-white min-h-screen p-6">
        <h2 className="text-3xl text-center pt-4">
          Meet With Our Professional Teachers
        </h2>
        <div className="bg-primary h-1 w-20 mx-auto mb-4"></div>
        <Filters />
        <div className="w-[70%] mx-auto pb-5">
          <h2 className="text-2xl font-bold mt-6">
            28,433 English teachers available
          </h2>
        </div>
        <CardList tutors={tutors} />
      </div>
    </Mainlayout>
  );
};

export default Index;
