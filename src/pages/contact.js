import React from "react";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Mainlayout from "@/components/Mainlayout";
import { PageSEO } from "@/hooks/SEO";
import siteSettings from "@/hooks/siteSettings";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <Mainlayout>
      <PageSEO
        title={`Contact us at ${siteSettings.title}`}
        description={siteSettings.description}
      />

      <div className="min-h-screen py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-blue-500 text-xl font-medium">INQUIRY</h2>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">
            Let’s Get in{" "}
            <span className="text-orange-500 underline">Touch</span>
          </h1>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="bg-blue-100 text-primary p-6 rounded-lg">
              <div className="mb-8">
                <h3 className="font-bold text-lg">Sales Department</h3>
                <p className="mt-2 flex items-center">
                  <span className="mr-2">
                    <FaPhone />
                  </span>{" "}
                  +234 705 372 861
                </p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-lg">HR Department</h3>
                <p className="mt-2 flex items-center">
                  <span className="mr-2">
                    <FaPhone />
                  </span>{" "}
                  +234 705 372 813
                </p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-lg">Sales Department</h3>
                <p className="mt-2 flex items-center">
                  <span className="mr-2">
                    <MdOutlineMail />
                  </span>{" "}
                  info@FindMyTutor.ng
                </p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-lg">Connect on Meet</h3>
                <p className="mt-2 flex items-center">
                  <span className="mr-2">📹</span> FindMyTutor
                </p>
              </div>

              <h3 className="font-bold text-lg">Read Our Customers Feedback</h3>
              <div className="mt-4 flex space-x-4">
                <Link href="#">
                  <FaFacebookF className="bg-white p-4 w-14 h-14 rounded-xl hover:bg-blue-50" />
                </Link>
                <Link href="#">
                  {" "}
                  <FaInstagram className="bg-white p-4 w-14 h-14 rounded-xl hover:bg-blue-50" />
                </Link>
                <Link href="#">
                  {" "}
                  <FaXTwitter className="bg-white p-4 w-14 h-14 rounded-xl hover:bg-blue-50" />
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-gray-800 text-lg font-semibold mb-4">
                Please fill in the form below.
              </h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border p-2 rounded-md w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border p-2 rounded-md w-full"
                  />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="border p-2 rounded-md w-full"
                  />
                  <input
                    type="text"
                    placeholder="Meet"
                    className="border p-2 rounded-md w-full"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="col-span-2 border p-2 rounded-md w-full"
                  />
                  <textarea
                    placeholder="Message"
                    className="col-span-2 border p-2 rounded-md w-full"
                    rows="4"
                  ></textarea>
                </div>

                <div className="mt-4 flex items-start">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 mt-1"
                    id="agree"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <span className="text-blue-500">Terms & Conditions</span> of
                    FindMyTutor.
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-primary text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                  Send your inquiry →
                </button>

                <p className="mt-4 text-sm text-gray-600">
                  🔒 We hate spam, and we respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default Contact;
