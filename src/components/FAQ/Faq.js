// "use clients";
// import { useState } from "react";
// import Link from "next/link";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// const faqData = [
//   {
//     question: "What kind of tutors does FindMyTutor look for?",
//     answer:
//       "No specific certification or teaching experience is required! We welcome tutors who:\n• Enjoy sharing knowledge and making a difference in students’ lives\n• Have outstanding communication skills\n• Are willing to provide a personalized learning experience to international students",
//   },
//   {
//     question: "What subject can I teach?",
//     answer:
//       "We have over 100 subjects on FindMyTutor, including languages, school and university subjects, hobbies, and art.",
//   },
//   {
//     question: "How do I become an online tutor at FindMyTutor?",
//     answer:
//       "1. Provide some basic information about yourself\n2. Upload your headshot photo\n 3. Describe your strengths as a tutor\n 4. Record a short video instruction (yp to 2 mins long)\n 5. Choose your availability\n You’ll see tips and examples at each step of the registration process to help you create a great tutor profile. When you complete registration, our Tutor Success team will review your profile within 5 working days. Once your profile is approved, students from around the world will see it on FindMyTutor and will be able to book lessons with you.",
//   },
//   {
//     question: "How can I get my profile approved quickly?",
//     answer:
//       "Sometimes, we don’t approve tutor profiles at the first attempt because the profile photo, video or description doesn’t meet our requirements. Make sure you use a real photo of yourself, take the time to record a short video and describe your strengths as a tutor in the description. A surefire way to get approved is to follow the tips given at each step of the registration process.Also, be sure to avoid mentioning any contact details, lesson prices or misleading information in your profile description and video. We’ll ask you to remove this information, which will slow down the approval process.",
//   },
//   {
//     question: "Why should I teach on FindMyTutor?",
//     answer:
//       "Because it’s easy and flexible! If you teach with FindMyTutor, you:\n1. earn by sharing what you know\n2. get a steady stream of new students looking to learn online\n3. manage your lessons and connect with students easily\n4. teach whenever and wherever you want\n5. use safe payment methods (Paypal, Payoneer, Skrill or Transferwise)\n6. get support from our friendly team through professional development webinars, live chat and email\n7. join a community of expert tutors who are always there for you...and more to come! We’re constantly improving the platform and teaching tools for our tutors based on their needs.",
//   },
//   {
//     question: "What computer equipment do I need to teach on FindMyTutor?",
//     answer:
//       "You will need a laptop or a desktop computer, a stable internet connection, a webcam, and a microphone for conducting lessons in the FindMyTutor virtual classroom.",
//   },
//   {
//     question: "Is it free to create a tutor profile on FindMyTutor?",
//     answer:
//       "Yes. It is free to create a tutor profile, get exposure to students, and use FindMyTutor’s tools and materials. We only charge a commission for the lessons that you have taught. The commission for a trial lesson with a new student is 100%. The commission for the subsequent lessons starts at 33% and decreases to 18%: the more hours you teach on FindMyTutor, the lower the rate of commission.",
//   },
//   {
//     question: "How much can I earn on FindMyTotor?",
//     answer:
//       "Most popular tutors on FindMyTutor earn up to $550 a week. Your earnings depend on the hourly rate you set, the number of lessons you teach and how many students continue learning with you after the trial lesson. A tip for newly registered tutors: start with a lower hourly rate to get first students faster. You can change your rate anytime.FindMyTutor takes a commission fee from your lessons to bring in more students from around the globe, and develop an easy-to-use video tool and learning materials for your lessons. We provide free professional development webinars and multilingual customer support to guide you along every step of your tutoring journey.The commission for every trial lesson with a new student is 100%. For all subsequent lessons, the commission starts at 33% and decreases to 18% based on how many hours you’ve taught on the platform.",
//   },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section id="faq" className="w-full md:w-[90%] xl:max-w-3xl mx-auto my-8 p-4 text-black">
//       <h2 className="text-2xl xl:text-5xl font-bold mb-6">
//         Frequently Asked Questions
//       </h2>
//       {faqData.map((item, index) => (
//         <div key={index} className="border-b py-4">
//           <button
//             onClick={() => toggleFAQ(index)}
//             className="w-full text-left text-sm font-semibold flex justify-between items-center"
//           >
//             {item.question}
//             <span className="text-xl">
//               {openIndex === index ? (
//                 <MdKeyboardArrowUp />
//               ) : (
//                 <MdKeyboardArrowDown />
//               )}
//             </span>
//           </button>
//           {openIndex === index && (
//             <p className="mt-2 text-sm text-black whitespace-pre-line leading-6">
//               {item.answer}
//             </p>
//           )}
//         </div>
//       ))}
//       <div className="md:flex items-start gap-2 py-10 text-sm leading-7">
//         <span className="text-gray-500">Have more questions?</span>{" "}
//         <Link href="#" className="underline hover:text-red-500">
//           Check our help center
//         </Link>
//         <div className="flex gap-2">
//           <p>Or</p>
//           <Link href="#" className="underline hover:text-red-500">
//             Contact our support team
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;


"use client";
import { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { motion } from "framer-motion";
import siteSettings from "@/hooks/siteSettings";

const faqData = [
  {
         question: "What kind of tutors does FindMyTutor look for?",
         answer:
           "No specific certification or teaching experience is required! We welcome tutors who:\n• Enjoy sharing knowledge and making a difference in students’ lives\n• Have outstanding communication skills\n• Are willing to provide a personalized learning experience to international students",
       },
       {
         question: "What subject can I teach?",
         answer:
           "We have over 100 subjects on FindMyTutor, including languages, school and university subjects, hobbies, and art.",
       },
       {
         question: "How do I become an online tutor at FindMyTutor?",
         answer:
           "1. Provide some basic information about yourself\n2. Upload your headshot photo\n 3. Describe your strengths as a tutor\n 4. Record a short video instruction (yp to 2 mins long)\n 5. Choose your availability\n You’ll see tips and examples at each step of the registration process to help you create a great tutor profile. When you complete registration, our Tutor Success team will review your profile within 5 working days. Once your profile is approved, students from around the world will see it on FindMyTutor and will be able to book lessons with you.",
       },
       {
         question: "How can I get my profile approved quickly?",
         answer:
           "Sometimes, we don’t approve tutor profiles at the first attempt because the profile photo, video or description doesn’t meet our requirements. Make sure you use a real photo of yourself, take the time to record a short video and describe your strengths as a tutor in the description. A surefire way to get approved is to follow the tips given at each step of the registration process.Also, be sure to avoid mentioning any contact details, lesson prices or misleading information in your profile description and video. We’ll ask you to remove this information, which will slow down the approval process.",
       },
       {
         question: "Why should I teach on FindMyTutor?",
         answer:
           "Because it’s easy and flexible! If you teach with FindMyTutor, you:\n1. earn by sharing what you know\n2. get a steady stream of new students looking to learn online\n3. manage your lessons and connect with students easily\n4. teach whenever and wherever you want\n5. use safe payment methods (Paypal, Payoneer, Skrill or Transferwise)\n6. get support from our friendly team through professional development webinars, live chat and email\n7. join a community of expert tutors who are always there for you...and more to come! We’re constantly improving the platform and teaching tools for our tutors based on their needs.",
       },
       {
         question: "What computer equipment do I need to teach on FindMyTutor?",
         answer:
           "You will need a laptop or a desktop computer, a stable internet connection, a webcam, and a microphone for conducting lessons in the FindMyTutor virtual classroom.",
       },
       {
         question: "Is it free to create a tutor profile on FindMyTutor?",
         answer:
           "Yes. It is free to create a tutor profile, get exposure to students, and use FindMyTutor’s tools and materials. We only charge a commission for the lessons that you have taught. The commission for a trial lesson with a new student is 100%. The commission for the subsequent lessons starts at 33% and decreases to 18%: the more hours you teach on FindMyTutor, the lower the rate of commission.",
       },
       {
         question: "How much can I earn on FindMyTotor?",
         answer:
           `Most popular tutors on FindMyTutor earn up to ${siteSettings.currency} 20,000 a week. Your earnings depend on the hourly rate you set, the number of lessons you teach and how many students continue learning with you. A tip for newly registered tutors: start with a lower hourly rate to get first students faster. You can change your rate anytime.FindMyTutor takes a commission fee from your lessons to bring in more students from around the globe, and develop an easy-to-use video tool and learning materials for your lessons. We provide free professional development webinars and multilingual customer support to guide you along every step of your tutoring journey.The commission for every trial lesson with a new student is 100%. For all subsequent lessons, the commission starts at 33% and decreases to 18% based on how many hours you’ve taught on the platform.`,
       },
     ];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full md:w-[90%] xl:w-[82%] mx-auto my-8 p-4 text-black"
    >
      <h2 className="text-2xl xl:text-5xl font-bold mb-6">
        Frequently Asked Questions
      </h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left text-sm font-semibold flex justify-between items-center"
          >
            {item.question}
            <span className="text-xl">
              {openIndex === index ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </span>
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-2 text-sm text-black whitespace-pre-line leading-6">
                {item.answer}
              </p>
            </motion.div>
          )}
        </div>
      ))}
      <div className="md:flex items-start gap-2 py-10 text-sm leading-7">
        <span className="text-gray-500">Have more questions?</span>{" "}
        <Link href="#" className="underline hover:text-red-500">
          Check our help center
        </Link>
        <div className="flex gap-2">
          <p>Or</p>
          <Link href="#" className="underline hover:text-red-500">
            Contact our support team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


