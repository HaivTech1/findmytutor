import React from "react";
import Image from "next/image";

import Mainlayout from "@/components/Mainlayout";
import { PageSEO } from "@/hooks/SEO";
import siteSettings from "@/hooks/siteSettings";
import Logo from "../../assets/logo.jpg";

const Contact = () => {
  return (
    <Mainlayout>
      <PageSEO
        title={`Contact us at ${siteSettings.title}`}
        description={siteSettings.description}
      />

      <div className="first-letter:flex justify-center items-center">
        <div className="w-[95%] lg:w-[80%] mx-auto flex items-center justify-center my-10">
          {/* <Image src={Logo} alt="" width={300} height={300} /> */}
          <div className="bg-white p-8 rounded-xl border-2 border-black w-[50%]">
            <div className="flex justify-center items-center">
              <Image src={Logo} alt="" width={100} height={100} />
            </div>
            <form>
              {/* First Name */}
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full rounded-md border border-black placeholder:text-sm p-2 text-gray-900 focus:ring-2 focus:border-black"
                  placeholder="Enter your first name"
                />
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full rounded-md border border-black placeholder:text-sm p-2 text-gray-900 focus:ring-2 focus:border-black"
                  placeholder="Enter Last Name"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-black placeholder:text-sm p-2 text-gray-900 focus:ring-2 focus:border-black"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border border-black placeholder:text-sm p-2 text-gray-900 focus:ring-2 focus:border-black"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Job Title */}
              <div className="mb-4">
                <label
                  htmlFor="jobTitle"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  className="mt-1 block w-full rounded-md border border-black placeholder:text-sm p-2 text-gray-900 focus:ring-2 focus:border-black"
                  placeholder="Enter your job title"
                  spellCheck={false}
                />
              </div>

              {/* Country */}
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="mt-1 block w-full rounded-md border border-black placeholder:text-sm p-2 text-gray-900 focus:ring-2 focus:border-black"
                >
                  <option value="">Select your country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white py-2 px-4 rounded-md font-semibold text-sm"
              >
                Speak to an expert
              </button>
            </form>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default Contact;
