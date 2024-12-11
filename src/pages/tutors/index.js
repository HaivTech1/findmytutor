import React from "react";

import CardList from "@/components/LessonHero/CardList";
import Filters from "@/components/LessonHero/Filters";
import Mainlayout from "@/components/Mainlayout";
import withAuth from "@/hooks/withAuth";

const Index = () => {
  return (
    <Mainlayout>
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
        <CardList />
      </div>
    </Mainlayout>
  );
};

export default withAuth(Index);
