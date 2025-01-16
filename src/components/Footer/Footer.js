"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import siteSettings from "@/hooks/siteSettings";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <footer className="bg-primary text-white mt-10">
      <div className="w-[90%] lg:w-[80%] mx-auto py-12 grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">About Us</h2>
          <p className="text-sm">
            {isExpanded
              ? "FindMyTutor is an innovative EdTech solution designed to provide personalized learning experiences by connecting students with qualified tutors. Our solution is a mobile application, starting with a web app, that will serve as the platform where students can access qualified tutors, and tutors can register to offer their services and expertise."
              : "FindMyTutor is an innovative EdTech solution designed to provide personalized learning experiences by connecting students with qualified tutors."}
            <button
              onClick={handleToggle}
              className="text-[#21caab] hover:underline ml-2"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="text-sm flex flex-col gap-2">
            <Link href="/findMyTutor" className="hover:text-[#21caab]">
              Find Tutors
            </Link>
            <Link href="/login" className="hover:text-[#21caab]">
              Login
            </Link>
            <Link href="#faq" className="hover:text-[#21caab]">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-[#21caab]">
              Contact Us
            </Link>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <ul className="text-sm flex  flex-col gap-2">
            <li className="flex items-center gap-2">
              <FaLocationArrow /> {siteSettings.address}
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineMail /> {siteSettings.email}
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> {siteSettings.phone_number}
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-lg">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-[#21caab]"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-[#21caab]"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-[#21caab]"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-[#21caab]"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="#"
              aria-label="YouTube"
              className="hover:text-[#21caab]"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#090916] py-4">
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2012–2024 FindMyTutor. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
