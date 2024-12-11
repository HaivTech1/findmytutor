import Image from "next/image";

import OverlappingImages from "./OverlappingImages";
import HeroImage1 from "../../../assets/HeroImage.jpg";
import HeroImage2 from "../../../assets/HeroImage.jpg";
import HeroImage3 from "../../../assets/HeroImage.jpg";
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
    <section className="relative">
      <div className="w-full lg:w-[95%] xl:max-w-7xl mx-auto grid lg:grid-cols-3 items-center space-x-10 just py-10">
        <div className="lg:col-span-2 w-full lg:mt-14">
          <div className="space-y-6">
            {/*for lg screen size */}
            <h1 className="text-2xl hidden lg:block lg:text-5xl font-bold text-black tracking-tighter">
              Make a living by teaching the largest <br />
              community of learners worldwide
            </h1>
            {/*for small screen size */}
            <h1 className="text-3xl lg:text-5xl px-3 lg:hidden font-bold text-black tracking-tighter">
              Make a living by teaching the largest community of learners
              worldwide
            </h1>
            {/*Steps */}
            <div className="step">
              <StepSection />
            </div>
            <Button text="Create a tutor profile now" />
          </div>
        </div>
        <div className="flex-1 hidden lg:block z-0">
          <OverlappingImages images={images} />
        </div>
      </div>
      {/*Sub HeroSection */}
      <div className="w-full lg:w-[95%] xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 px-3 lg:px-0 py-5 lg:py-20">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl lg:text-3xl">
            Set your own rate
          </h2>
          <p className="tracking-wide">
            Choose your hourly rate and change it anytime. On average, English
            tutors charge $15-25 per hour.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl lg:text-3xl">
            Teach anytime, anywhere
          </h2>
          <p>
            Decide when and how many hours you want to teach. No minimum time
            commitment or fixed schedule. Be your own boss!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl lg:text-3xl">
            Grow Professionally
          </h2>
          <p>
            Attend professional development webinars and get tips to upgrade
            your skills. You’ll get all the help you need from our team to grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
