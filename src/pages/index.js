import Link from "next/link";

import Carousel from "@/components/Carousel/Carousel";
import FAQ from "@/components/FAQ/Faq";
import GetPaidSection from "@/components/GetPaidSection/GetPaidSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import Mainlayout from "@/components/Mainlayout";
import SubFeature from "@/components/SubFeature/TestimonialSection";
import TutorStudent from "@/components/TutorStudent.tsx/Features";
import { PageSEO } from "@/hooks/SEO";
import siteSettings from "@/hooks/siteSettings";
import { UseAuth } from "@/hooks/UseAuth";

export default function Home() {

  UseAuth({
    middleware: "",
    redirectIfAuthenticated: ""
  });

  return (
    <Mainlayout>
      <PageSEO
        title={siteSettings.title}
        description={siteSettings.description}
      />

      <section>
        <Carousel />
        {/* <HeroSection /> */}
        <TutorStudent />
        <SubFeature />

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-100 dark:text-gray-800 w-[93%] lg:w-[85%] mx-auto my-4 sm:mt-0">
          <h2 className="mb-8 text-2xl sm:text-4xl font-bold leading-none text-center">
            We offer classes to
          </h2>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-violet-600"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Secondary Students</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-violet-600"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>College Students </span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-violet-600"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Professionals</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-violet-600"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Adult Learners and Language Learners</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-violet-600"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Test Prep Students</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-violet-600"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>University Students </span>
            </li>
          </ul>
        </div>

        <section className="dark:bg-gray-100 dark:text-gray-800 w-[93%] lg:w-[85%] mx-auto mt-4 sm:mt-0">
          <div className="container p-4 mx-auto my-6 space-y-1 text-center">
            <span className="text-xs font-semibold tracking-wider uppercase dark:text-violet-600">
              Your Gateway to Academic Excellence
            </span>
            <h2 className="pb-3 text-3xl font-bold md:text-4xl">
              Achieve Your Learning Goals with Ease
            </h2>
            <p>
              Unlock your potential with tailored learning plans, flexible
              payment options, and expert guidance to help you succeed in exams
              and beyond.
            </p>
          </div>
          <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col px-8 py-6">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
                Incentives
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
                Enjoy discounts on 6- and 12-month subscriptions, making it
                easier to plan for long-term learning success.
              </p>
            </div>
            <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
                Loyalty Points
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
                Earn points for every purchase and redeem them for free sessions
                or other rewards to keep you motivated.
              </p>
            </div>
            <div className="flex flex-col px-8 py-6">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
                Flexible Payment Plans
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
                Choose from monthly or installment payments for subscription
                plans to manage your learning expenses easily.
              </p>
            </div>
            <div className="flex flex-col px-8 py-6">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
                Seasonal Offers
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">
                Take advantage of special discounts during exam prep periods or
                the start of a new academic term.
              </p>
            </div>
          </div>
        </section>

        <div className="p-6 py-12 bg-primary text-white w-[93%] lg:w-[85%] mx-auto mt-4 sm:mt-0">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-wide text-white font-bold">
                Up to 20% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>Plus free recommendation when you subscribe for</span>
                <span className="font-bold text-lg">6 to 12 months</span>
              </div>
            </div>
          </div>
        </div>

        <FAQ />

        <GetPaidSection />
      </section>
    </Mainlayout>
  );
}
