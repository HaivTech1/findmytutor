import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Image from "next/image";
import bg1 from "../../../assets/onlineClass.jpg";
import StepSection from "../StepSection/StepSection";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Typewriter from "typewriter-effect";

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
                Empower the world's largest community of learners while earning{" "}
                <span className="text-purple-500 inline-block">
                  <Typewriter
                    options={{
                      strings: ["a living through teaching"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>

              <p className="text-sm  tracking-wider leading-6 md:w-[85%] lg:w-[80%] text-gray-400 mt-2">
                Join a thriving community of educators passionate about sharing
                knowledge and empowering learners. Transform lives through your
                expertise while enjoying the flexibility and fulfillment of
                teaching on your own terms.
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
                Empower the world's largest community of learners while earning{" "}
                <span className="text-purple-500 inline-block">
                  <Typewriter
                    options={{
                      strings: ["a living through teaching"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <p className="text-sm  leading-6 tracking-wider md:w-[85%] lg:w-[80%] text-gray-400 mt-2">
                Join a thriving community of educators passionate about sharing
                knowledge and empowering learners. Transform lives through your
                expertise while enjoying the flexibility and fulfillment of
                teaching on your own terms.
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
