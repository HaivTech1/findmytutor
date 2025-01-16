import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Slider from "react-slick";
import Typewriter from "typewriter-effect";

import bg1 from "../../../assets/online.png";
import bg2 from "../../../assets/online2.png";
import StepSection from "../StepSection/StepSection";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-3 hidden lg:block rounded-full bg-opacity-50 text-[whitesmoke] text-3xl hover:bg-opacity-75 transition absolute right-4 top-1/2 transform -translate-y-1/2"
  >
    <MdOutlineArrowForwardIos />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-3  hidden lg:block rounded-full bg-opacity-50 text-[whitesmoke] text-3xl hover:bg-opacity-75 transition absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
  >
    <MdOutlineArrowBackIos />
  </button>
);

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.6 } },
};

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const router = useRouter();

  const navigateToTutoReg = () => {
    router.push("/register?mode=tutor");
  };

  const navigateToStudentReg = () => {
    router.push("/register?mode=student");
  };

  const slides = [
    {
      id: 1,
      content: (
        <div className="relative w-full h-full mt-5 lg:mt-0">
          <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 bg-white">
            {/* Left Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textAnimation}
              className="lg:w-1/2 text-center md:text-left mb-8 lg:mb-0"
            >
              <h1 className="text-lg md:text-xl lg:text-2xl md:w-[90%] lg:w-full font-bold leading-tight text-gray-900 mb-1">
                Earn by empowering learners globally.{" "}
                <span className="text-secondary inline-block">
                  <Typewriter
                    options={{
                      strings: ["Teach and earn"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>

              <p className="text-sm tracking-wider leading-6 md:w-[85%] lg:w-[80%] text-gray-500 mt-2">
                Join a vibrant community of educators sharing knowledge,
                empowering learners, and transforming lives—all on your terms.
              </p>

              <motion.div
                variants={buttonAnimation}
                className="flex flex-col md:flex-row items-center justify-start gap-4 mt-10 lg:mt-14"
              >
                <Link
                  href="/tutors"
                  className="bg-primary text-white font-bold py-2 px-6 rounded transition"
                >
                  Find Tutor
                </Link>
                <button
                  onClick={navigateToTutoReg}
                  className="border-2 border-primary text-gray-900 font-bold py-2 px-6 rounded transition ease-out"
                >
                  Create A Tutor Profile
                </button>
              </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageAnimation}
              className="hidden md:w-1/2 lg:flex justify-center"
            >
              <Image
                src={bg1}
                alt="AI Placeholder Illustration"
                className="w-full max-w-md "
              />
            </motion.div>
          </section>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="relative w-full h-full mt-5 lg:mt-0">
          <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 bg-white">
            {/* Left Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textAnimation}
              className="lg:w-1/2 text-center md:text-left mb-8 lg:mb-0"
            >
              <h1 className="text-lg md:text-xl lg:text-2xl md:w-[90%] lg:w-full font-bold leading-tight text-gray-900 mb-1">
                Unlock Your Potential and Learn from the Best.{" "}
                <span className="text-secondary inline-block">
                  <Typewriter
                    options={{
                      strings: ["Learn and grow"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <p className="text-sm leading-6 tracking-wider md:w-[85%] lg:w-[80%] text-gray-500 mt-2">
                Join a thriving community of learners gaining knowledge,
                achieving goals, and shaping their future—one step at a time.
              </p>

              <motion.div
                variants={buttonAnimation}
                className="flex flex-col md:flex-row items-center justify-start gap-4 mt-10 lg:mt-14"
              >
                <Link
                  href="/register?mode=student"
                  className="bg-primary text-white font-bold py-2 px-6 rounded transition"
                >
                  Become A Student
                </Link>
                <button
                  onClick={navigateToStudentReg}
                  className="border-2 border-primary text-gray-900 font-bold py-2 px-6 rounded transition ease-out"
                >
                  Create A Student Profile
                </button>
              </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageAnimation}
              className="hidden md:w-1/2 lg:flex justify-center"
            >
              <Image
                src={bg2}
                alt="AI Placeholder Illustration"
                className="w-full max-w-md "
              />
            </motion.div>
          </section>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>{slide.content}</div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
