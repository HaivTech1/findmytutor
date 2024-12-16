import React, { useState } from "react";
import Link from "next/link";
import { LoaderIcon } from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import Client from "@/context/Client";
import { isLoggedIn, sendError, ValidateInput } from "@/hooks/helpers";
import { showErrorToast, showSuccessToast } from "../CustomToast";

const BookingModal = ({
  toggleBookingModal,
  profile_picture,
  full_name,
  tutorId,
}) => {
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [teachingMode, setTeachingMode] = useState("online");
  const [meetingMethod, setMeetingMethod] = useState("google_meet");
  const [loading, setLoading] = useState(false);

  // Submit handler
  const handleBooking = async () => {
    const bookingData = {
      tutor_id: tutorId,
      subject,
      from,
      to,
      teaching_mode: teachingMode,
      meeting_method: meetingMethod,
    };
    setLoading(true);

    try {
      var keys = ["tutor_id", "subject", "from", "to"];

      const allow = ValidateInput(bookingData, keys);
      if (allow.status) {
        Client()
          .post("/user/student/bookings", bookingData)
          .then((response) => {
            setLoading(false);

            toggleBookingModal();
            const { data } = response;
            showSuccessToast(data.message);
          })
          .catch((error) => {
            setLoading(false);

            const errorMessage = sendError(error);
            showErrorToast(
              errorMessage?.message ??
                "There was an error submitting your booking. Please try again."
            );
          });
      } else {
        setLoading(false);
        showErrorToast(allow.message);
      }
    } catch (error) {
      setLoading(false);
      showErrorToast("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {isLoggedIn() ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="relative z-50 bg-white rounded-lg shadow-lg w-full max-w-md p-6 border-2 border-gray-200">
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <img
                src={profile_picture}
                alt="Tutor"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h2 className="text-center text-2xl font-semibold mb-4">
              You are already logged in!
            </h2>
            <p className="text-center text-gray-600 mb-6">
              No need to book again. You can continue exploring or learning.
            </p>
            <button
              onClick={toggleBookingModal}
              className="w-full text-white bg-primary font-semibold rounded-lg py-2 hover:bg-[#100930]"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Modal */}
          <div className="relative z-50 bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            {/* Close Button */}
            <button
              onClick={toggleBookingModal}
              className="bg-gray-200 p-1 rounded-lg mb-4"
            >
              <FaTimes />
            </button>

            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <img
                src={profile_picture}
                alt="Tutor"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            {/* Modal Header */}
            <h2 className="text-center text-2xl font-semibold mb-2">
              Sign up to start learning
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Only one step left to book your lesson with{" "}
              <span className="font-bold">{full_name}</span>
            </p>

            {/* Subject Input */}
            <input
              type="text"
              placeholder="Subject..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
            />

            {/* Date-Time Inputs */}
            <label className="text-gray-600 text-sm">From:</label>
            <input
              type="datetime-local"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <label className="text-gray-600 text-sm">To:</label>
            <input
              type="datetime-local"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Continue Button */}
            <button
              onClick={handleBooking}
              disabled={loading}
              className={`w-full text-white font-semibold rounded-lg py-2 transition flex items-center space-x-2 justify-center ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-[#100930]"
              }`}
            >
              <span>Continue</span> {loading && <LoaderIcon />}
            </button>

            {/* Terms */}
            <p className="text-xs text-center text-gray-500 mt-4">
              By clicking Continue or Sign up, you agree to{" "}
              <Link href="#" className="underline">
                FMT Terms of Use
              </Link>
              , including{" "}
              <Link href="#" className="underline">
                Subscription Terms
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
              .
            </p>

            {/* Already have an account */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have a FindMyTutor account?{" "}
              <Link href="/login" className="text-pink-600 underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
