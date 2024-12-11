import Image from "next/image";
import Button from "../Button";
import HeroImage1 from "../../../assets/benefitAsset.jpg";
import HeroImage2 from "../../../assets/benefitAsset.jpg";
import HeroImage3 from "../../../assets/benefitAsset.jpg";
import FeaturesImage from "./FeaturesImages";

const Features = () => {
  // Array of image paths for mapping
  const images = [
    {
      src: HeroImage1,
      alt: "Tutor smiling 1",
      width: 250,
      height: 100,
      left: "125px",
      top: "120px",
    },
    {
      src: HeroImage2,
      alt: "Tutor smiling 2",
      width: 300,
      height: 200,
      left: "100px",
      top: "-10px",
    },
    {
      src: HeroImage3,
      alt: "Tutor smiling 3",
      width: 360,
      height: 400,
      left: "70px",
      top: "-150px",
    },
  ];

  // Array of feature list items
  const features = [
    "Steady stream of new students",
    "Smart calendar",
    "Interactive classroom",
    "Convenient payment methods",
    "Professional development webinars",
    "Supportive tutor community",
  ];

  return (
    <div className="w-[93%] lg:w-[95%] xl:w-[84%] mx-auto flex flex-col md:flex-row justify-end items-center md:items-center py-10 lg:py-20">
      {/* Left Section: Features */}
      <div className="">
        <div className="flex items-center gap-2">
          <div className="bg-[#158f78] w-1 h-10 lg:hidden xl:block"></div>
          <h1 className="text-2xl lg:text-5xl font-bold lg:w-[70%] xl:w-[60%]">
            Teach students from over 180 countries
          </h1>
        </div>

        <p className="text-sm md:text-lg mb-6 lg:w-[70%] text-gray-600 leading-6">
          FindMyTutors teach 800,000+ students globally. Join us and you’ll
          have everything you need to teach successfully.
        </p>
        <ul className="space-y-4 text-lg">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-black mr-3">✔</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="my-10 lg:my-20">
          <Button text="Create a tutor profile now" />
        </div>
      </div>

      {/* Right Section: Overlapping Images */}
      <div className="hidden md:block md:w-[65%] lg:w-[60%] xl:w-[35%] relative mt-10 md:mt-0">
        <FeaturesImage images={images} />
      </div>
    </div>
  );
};

export default Features;
