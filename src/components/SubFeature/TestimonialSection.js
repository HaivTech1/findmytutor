import React from "react";
import Button from "../Button";
import HeroImage1 from "../../../assets/SubTutorImg.jpg";
import HeroImage2 from "../../../assets/SubTutorImg.jpg";
import HeroImage3 from "../../../assets/SubTutorImg.jpg";
import SubFeaturesImage from "./SubFeatureImage";

const TestimonialSection = () => {
  const images = [
    {
      src: HeroImage1,
      alt: "Tutor smiling 1",
      className:
        "absolute w-28 h-40 sm:w-32 sm:h-32 md:w-40 md:h-52 left-1 sm:left-4 md:left-0 lg:-left-20 xl:left-0 top-[-6px] sm:top-[-12px] md:top-[-24px]",
    },
    {
      src: HeroImage2,
      alt: "Tutor smiling 2",
      className:
        "absolute w-40 h-52 sm:w-40 sm:h-32 md:w-52 md:h-72 left-14 sm:left-28 md:left-20 lg:left-0 xl:left-20 top-[-27px] sm:top-[-40px] md:top-[-60px]",
    },
    {
      src: HeroImage3,
      alt: "Tutor smiling 3",
      className:
        "absolute w-52 h-62 sm:w-56 sm:h-72 md:w-72 md:h-96 left-32 sm:left-64 md:left-44 lg:left-24 xl:left-44 top-[-60px] sm:top-[-72px] md:top-[-110px]",
    },
  ];

  return (
    <div className="text-primary w-full xl:w-[80%] mx-auto flex flex-col lg:flex-row xl:justify-center items-center gap-44 xl:gap-16 mt-16 md:mt-24 lg:mt-0  mb-10 lg:mb-40 ">
      <div className="w-[88%] lg:w-[90%] relative items-center justify-center">
        <SubFeaturesImage images={images} />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-16 md:mt-40 lg:-mt-10">
        {/*Large screen size */}
        <h2 className="text-2xl hidden lg:block lg:text-5xl text-left font-bold w-[9%] lg:w-[70%] xl:w-[60%] lg:leading-[52px]">
          "FMT allowed me to make a living without leaving home!"
        </h2>
        {/*small screen size  */}
        <div className="flex lg:hidden items-center gap-2 w-[95%] mx-auto">
          <div className="bg-green-500 w-1 h-10"></div>
          <h1 className="text-2xl md:text-4xl text-left font-bold lg:w-[60%] lg:leading-[52px]">
            "FMT allowed me to make a living without leaving home"
          </h1>
        </div>

        <div className="w-full lg:w-[60%] flex gap-2 items-center px-5 lg:px-0">
          <p className="text-lg font-semibold">Krista A. .</p>
          <span className="font-normal">English tutor</span>
        </div>
        <div className="lg:w-[60%] lg:mt-10">
          <Button text="Create a tutor profile now" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
