"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import StudyMaterial  from "../../../assets/book.png"; 
import LearningPlanIcon  from "../../../assets/elearning.png"; 
import Learning  from "../../../assets/material.png"; 

const Features = () => {
  // Array of feature cards
  const features = [
    {
      title: "Interactive Online Classes",
      description:
        "Engage students with live, interactive classes using advanced tools like virtual whiteboards, polls, and breakout rooms for group discussions.",
      icon: LearningPlanIcon,
    },
    {
      title: "Customized Learning Plans",
      description:
        "Create personalized lesson plans tailored to each student’s needs, focusing on their strengths and addressing challenges effectively.",
      icon: StudyMaterial,
    },
    {
      title: "Resourceful Study Materials",
      description:
        "Provide students with downloadable study materials, recorded lectures, and practice tests to support their learning beyond class sessions.",
      icon: Learning,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="w-[93%] lg:w-[85%] mx-auto"
    >
      {/* Features Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.2 },
              },
            }}
            className="bg-gray-100 bg-opacity-20 shadow-md p-6 rounded-lg flex flex-col items-center text-center border border-black"
          >
            <div className="w-20 h-20 mb-4 text-primary">
              <Image
                src={feature.icon}
                alt={feature.title}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Features;
