import React from "react";
import { motion } from "framer-motion";

import SubFeaturesImage from "./SubFeatureImage";
import HeroImage1 from "../../../assets/SubTutorImg.jpg";
import HeroImage2 from "../../../assets/SubTutorImg.jpg";
import HeroImage3 from "../../../assets/SubTutorImg.jpg";
import Button from "../Button";

const TestimonialSection = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeIn" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

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
    <motion.div
      className="text-primary w-full xl:w-[80%] mx-auto flex flex-col lg:flex-row xl:justify-center items-center gap-44 xl:gap-16 mt-16 md:mt-24 lg:mt-0 mb-10 lg:mb-40"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Images Section */}
      <motion.div
        className="w-[88%] lg:w-[100%] relative items-center justify-center"
        variants={fadeIn}
      >
        <SubFeaturesImage images={images} />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex flex-col gap-5 justify-center items-center mt-16 md:mt-40 lg:-mt-10"
        variants={fadeIn}
      >
        {/* Large screen size */}
        <motion.h2
          className="text-2xl hidden lg:block lg:text-5xl text-left font-bold w-[90%] lg:w-[70%] xl:w-[60%] lg:leading-[52px]"
          variants={fadeIn}
        >
          "FindMyTutor allowed me to make a living without leaving home!"
        </motion.h2>

        {/* Small screen size */}
        <motion.div
          className="flex lg:hidden items-center gap-2 w-[95%] mx-auto"
          variants={fadeIn}
        >
          <div className="bg-green-500 w-1 h-10"></div>
          <h1 className="text-2xl md:text-4xl text-left font-bold lg:w-[60%] lg:leading-[52px]">
            "FindMyTutor allowed me to make a living without leaving home"
          </h1>
        </motion.div>

        <motion.div
          className="w-full lg:w-[60%] flex gap-2 items-center px-5 lg:px-0"
          variants={fadeIn}
        >
          <p className="text-lg font-semibold"></p>
          <span className="font-normal">Shittu Oluwaseun</span>
        </motion.div>

        <motion.div className="lg:w-[60%] lg:mt-10" variants={fadeIn}>
          <Button text="Create a tutor profile now" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialSection;
