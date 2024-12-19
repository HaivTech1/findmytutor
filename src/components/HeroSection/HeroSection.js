"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import siteSettings from "@/hooks/siteSettings";
import OverlappingImages from "./OverlappingImages";
import HeroImage1 from "../../../assets/testimonial.jpg";
import HeroImage2 from "../../../assets/testimonial.jpg";
import testimonial3 from "../../../assets/testimonial.jpg";
import Button from "../Button";
import StepSection from "../StepSection/StepSection";

const HeroSection = () => {
  const images = [
    {
      src: HeroImage1,
      alt: "Tutor smiling 1",
      width: 220,
      height: 200,
      left: "3px",
      top: "-24px",
    },
    {
      src: HeroImage2,
      alt: "Tutor smiling 2",
      width: 270,
      height: 200,
      left: "32px",
      top: "-60px",
    },
    {
      src: HeroImage3,
      alt: "Tutor smiling 3",
      width: 350,
      height: 400,
      left: "70px",
      top: "-96px",
    },
  ];

  return (
    <section className="relative text-primary">
      <div className="w-full lg:w-[95%] xl:max-w-7xl mx-auto grid lg:grid-cols-3 items-center space-x-10 py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-2 w-full lg:mt-14"
        >
          <div className="space-y-6">
            {/* Heading for lg screens */}
            <h1 className="text-2xl hidden lg:block lg:text-5xl font-bold text-black tracking-tighter">
              Turn your expertise into income by teaching a global
              community of eager learners.
            </h1>
            {/* Heading for small screens */}
            <h1 className="text-3xl lg:text-5xl px-3 lg:hidden font-bold text-black tracking-tighter">
              Turn your expertise into income by teaching a global community of
              eager learners.
            </h1>
            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="step"
            >
              <StepSection />
            </motion.div>
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button text="Create a tutor profile now" />
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 hidden lg:block z-0"
        >
          <OverlappingImages images={images} />
        </motion.div>
      </div>

      {/* Sub Hero Section */}
      <div className="w-full lg:w-[95%] xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 px-3 lg:px-0 py-5 lg:py-20">
        {[
          {
            title: "Set your own rate",
            description: `Choose your hourly rate and change it anytime. On average, tutors charge ${siteSettings.currency} 2000 per hour.`,
          },
          {
            title: "Teach anytime, anywhere",
            description:
              "Decide when and how many hours you want to teach. No minimum time commitment or fixed schedule. Be your own boss!",
          },
          {
            title: "Grow Professionally",
            description:
              "Attend professional development webinars and get tips to upgrade your skills. You’ll get all the help you need from our team to grow.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 * index }}
            className="flex flex-col gap-3"
          >
            <h2 className="font-bold text-2xl lg:text-3xl">{item.title}</h2>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
