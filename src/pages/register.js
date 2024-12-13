import React, { useRef, useState } from 'react'
import { Country, State } from "country-state-city";
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { LoaderIcon } from 'react-hot-toast';

import { showErrorToast, showSuccessToast } from '@/components/CustomToast';
import Mainlayout from '@/components/Mainlayout';
import TextInput from '@/components/TextInput';
import Client from '@/context/Client';
import { reducerCases } from '@/context/constants';
import { useStateProvider } from "@/context/StateContext";
import { sendError, ValidateInput } from '@/hooks/helpers';
import { PageSEO } from '@/hooks/SEO';
import siteSettings from '@/hooks/siteSettings';
import { UseAuth } from '@/hooks/UseAuth';
import google from "../../assets/googles.svg";
import profileImage from "../../assets/SubTutorImg.jpg";

const Register = () => {

     UseAuth({
       middleware: "guest",
       redirectIfAuthenticated: "/",
     });

    const [{ userInfo }, dispatch] = useStateProvider();

     const router = useRouter();
     const { mode } = router.query;

    const [type, setType] = useState(mode ?? "student");
    const [cookie, setCookie] = useCookies(["access_token"]);


    const tabLength = Array(2).fill(0);
    const [currentStep, setCurrentStep] = useState(0);

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);

    const [inputs, setInputs] = useState({
      full_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone_number: "",
      user_type: type,
      grade_level: "",
      subjects_of_interest: "",
      learning_objectives: "",
      learning_mode: "",
      state: "",
      qualifications: "",
      subjects: "",
      experience_years: "",
      availability_schedule: "",
      hourly_rate: "",
      state: "",
      country: "Nigeria",
      bio: "",
      teaching_mode: "",
      verification_documents: [],
      profile_image: "",
    });

    const fileInputRefs = useRef({
      verification_documents: React.createRef(),
    });

    const profile_image = useRef(null);

    const [countries, setCountries] = useState(Country.getAllCountries());
    const selectedCountry = countries.find(
      (country) => country.name === inputs.country
    );
    const states = State.getAllStates().filter(
      (state) => state.countryCode === selectedCountry.isoCode
    );
  
    
    const handleSubmit = async () => {
      setIsLoading(true);

      try {
            const formData = new FormData();
            
            Object.keys(inputs).forEach((key, value) => {
              if (key !== "verification_documents" && inputs[key] !== "") {
                formData.append(key, inputs[key]);
              }
            });

            if (
              inputs.verification_documents &&
              Array.isArray(inputs.verification_documents)
            ) {
              inputs.verification_documents.forEach((file, index) => {
                formData.append(`verification_documents[${index}]`, file);
              });
            }

             if (inputs.profile_image.file) {
               formData.append("profile_image", {
                 uri: inputs.profile_image.file,
                 name: "uploaded_image.jpg",
                 type: "image/jpeg",
               });
             }


        Client()
          .post("/register", formData)
          .then((response) => {
            setIsLoading(false);

            const { data } = response;
            showSuccessToast(data.message);
            setCookie("access_token", data.access_token, {
              path: "/",
              maxAge: 3600,
              sameSite: true,
            });

            setCookie("is_verified", data.user.is_verified ? 1 : 0, {
              path: "/",
              sameSite: true,
            });

            dispatch({
              type: reducerCases.SET_USER_INFO,
              userInfo: data.user,
            });

            setTimeout(() => {
              router.push("/verify");
            }, 1500);
          })
          .catch((error) => {
            setIsLoading(false);
            const errorMessage = sendError(error);
            console.log(errorMessage);
            showErrorToast(errorMessage?.message ?? errorMessage?.error);
          });
      } catch (e) {
        setIsLoading(false);
        const errorMessage = sendError(e);
        console.log(errorMessage);
        showErrorToast("Networking error: " + errorMessage?.error);
      }
    };

    const handleGoogleLogin = (data) => {
      setIsLoadingGoogle(true);
      try {
        Client()
          .post("google_login", {
            email: data?.email,
            full_name: data?.name,
            profile_photo_path: data?.image,
            user_type: type,
          })
          .then((response) => {
            setIsLoadingGoogle(false);
            const { data } = response;

            setCookie("access_token", data.access_token, {
              path: "/",
              maxAge: 3600,
              sameSite: true,
            });

            setCookie("is_verified", data.user.is_verified ? 1 : 0, {
              path: "/",
              sameSite: true,
            });

            dispatch({
              type: reducerCases.SET_USER_INFO,
              userInfo: data.user,
            });

            if (type === "new_login") {
              router.replace("/setup");
            } else if (type === "old_login" && !data.profile) {
              router.replace("/setup");
            } else {
              router.replace("/");
            }
          })
          .catch((error) => {
            setIsLoadingGoogle(false);

            const errorMessage = sendError(error);
            showErrorToast(
              errorMessage?.message ??
                "There was an error connecting your sessioin."
            );
          });
      } catch (error) {
        const errorMessage = sendError(error);
        showErrorToast(
          errorMessage?.error ?? "There was an error connecting your sessioin."
        );
      }
    };

  const handleOnChange = (eventOrText, input) => {
    let value;

    if (input === "profile_image") {
      const file = eventOrText.currentTarget.files[0]; 
      value = file;

      const imageUrl = URL.createObjectURL(file);
      value = { file, imageUrl };
    } else {
      value = eventOrText;
    }

    setInputs((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };


    const handleTabPress = (step) => {
      setCurrentStep(step);
    };
    

    const handleFileChange = (e, key) => {
      const selectedFile = e.currentTarget.files[0];
      if (selectedFile) {
        setInputs((prevFormData) => {
          if (Array.isArray(prevFormData[key])) {
            return {
              ...prevFormData,
              [key]: [...prevFormData[key], selectedFile],
            };
          }
          return {
            ...prevFormData,
            [key]: selectedFile,
          };
        });
      }
    };

    const handleClick = (key) => {
      const fileInputRef = fileInputRefs.current[key];

      if (fileInputRef && fileInputRef.current) {
        fileInputRef.current.style.position = "absolute";
        fileInputRef.current.style.left = "-9999px";

        fileInputRef.current.click();

        fileInputRef.current.addEventListener("change", () => {
          fileInputRef.current.style.position = "none";
          fileInputRef.current.style.left = "none";
        });
      }
    };

    const handleProfileClick = (key) => {
        profile_image.current.click();
    };


    const step1 = () => {
      return (
        <div>
          <div className="my-4">
            <h1 className="text-black text-sm font-bold">Account Details</h1>
            <p className="text-black text-xs">
              Plese make sure you provied accurate details about your self.
            </p>
          </div>

          <div className="flex items-center justify-center my-2">
            <img
              src={inputs?.profile_image?.imageUrl ?? profileImage}
              className="w-20 h-20 rounded-full border-2 border-primary cursor-pointer"
              ref={profileImage}
              onClick={handleProfileClick}
            />

            <input
              id="fileInput-profile_image"
              name="profile_image"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => handleOnChange(e, "profile_image")}
              ref={profile_image}
            />
          </div>
          <p className="text-center text-sm font-bold mb-4">Select Profile Image</p>

          <div className="mb-2 sm:mb-4 relative">
            <TextInput
              disabled={false}
              placeholder="John Doe"
              label="Full Name"
              type="text"
              onChange={(e) => handleOnChange(e.target.value, "full_name")}
            />
          </div>

          {/* Email and Password Fields */}
          <div className="mb-2 sm:mb-4 relative">
            <TextInput
              disabled={false}
              placeholder="Enter here"
              label="Email"
              onChange={(e) => handleOnChange(e.target.value, "email")}
            />
          </div>

          <div className="mb-2 sm:mb-4 relative">
            <TextInput
              disabled={false}
              placeholder="Enter here"
              label="Phone Number"
              type="tel"
              onChange={(e) => handleOnChange(e.target.value, "phone_number")}
            />
          </div>

          <div className="mb-2 sm:mb-4">
            <TextInput
              disabled={false}
              placeholder="Enter here"
              label="Password"
              password
              onChange={(e) => handleOnChange(e.target.value, "password")}
            />
          </div>

          <div className="mb-2 sm:mb-4">
            <TextInput
              disabled={false}
              placeholder="Enter here"
              label="Confirm Password"
              password
              onChange={(e) =>
                handleOnChange(e.target.value, "password_confirmation")
              }
            />
          </div>
        </div>
      );
    }

    const stepTutor2 = () => {
      return (
        <div>
          <div className="my-4">
            <h1 className="text-black text-sm font-bold">Profile Details</h1>
            <p className="text-black text-xs">
              Plese make sure you provied accurate details about your self.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-x-3">
            <div className="mb-2 sm:mb-4 w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>

              <select
                disabled
                name="country"
                value={inputs?.country}
                onChange={(e) => handleOnChange(e.target.value, "country")}
                className="w-full px-4 py-3 text-gray-500 border-2 outline-none hover:border-primary focus:border-blue-500 focus:outline-none shadow-sm rounded-lg shadow-sm rounded-lg"
              >
                <option value="" disabled>
                  Select Country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country?.name}>
                    {country?.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-2 sm:mb-4 w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>

              <select
                name="state"
                value={inputs?.state}
                onChange={(e) => handleOnChange(e.target.value, "state")}
                className="w-full px-4 py-3 text-gray-500 border-2 outline-none hover:border-primary focus:border-blue-500 focus:outline-none shadow-sm rounded-lg shadow-sm rounded-lg"
              >
                <option value="" disabled>
                  Select State
                </option>
                {states.map((state, index) => (
                  <option key={index} value={state?.name}>
                    {state?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-x-3">
            <div className="mb-2 sm:mb-4 w-full">
              <TextInput
                disabled={false}
                placeholder="NCE"
                label="Qualifications"
                onChange={(e) =>
                  handleOnChange(e.target.value, "qualifications")
                }
              />
            </div>

            <div className="mb-2 sm:mb-4 w-full">
              <TextInput
                disabled={false}
                placeholder="English language, Mathematics"
                label="Subjects of interest"
                onChange={(e) => handleOnChange(e.target.value, "subjects")}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-x-3">
            <div className="mb-2 sm:mb-4 w-full">
              <TextInput
                disabled={false}
                placeholder="4"
                label="Years of Experience"
                type="number"
                onChange={(e) =>
                  handleOnChange(e.target.value, "experience_years")
                }
              />
            </div>

            <div className="mb-2 sm:mb-4 w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teaching Mode
              </label>

              <select
                name="teaching_mode"
                value={inputs?.teaching_mode}
                onChange={(e) =>
                  handleOnChange(e.target.value, "teaching_mode")
                }
                className="w-full px-4 py-3 text-gray-500 border-2 outline-none hover:border-primary focus:border-blue-500 focus:outline-none shadow-sm rounded-lg"
              >
                <option value="" disabled>
                  Select Teaching Mode
                </option>
                {["online", "in-person", "hybrid"].map((mode, index) => (
                  <option key={index} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-x-3">
            <div className="mb-2 sm:mb-4 w-full">
              <TextInput
                disabled={false}
                placeholder="4"
                type="number"
                label="Hourly Rate"
                onChange={(e) => handleOnChange(e.target.value, "hourly_rate")}
              />
            </div>

            <div className="mb-2 sm:mb-4 w-full">
              <TextInput
                disabled={false}
                placeholder="Monday 9am-10am, Tuesday 4pm-5pm"
                label="Availability"
                onChange={(e) =>
                  handleOnChange(e.target.value, "availability_schedule")
                }
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              <span className="text-[#D60000]">*</span>
              Upload Verification Certificate
            </label>

            <div className="w-full border-[1px] rounded-xl">
              <label
                htmlFor="fileInput-verification_documents"
                className="cursor-pointer"
              >
                <img
                  src="/assets/dashicons.svg"
                  className="px-[10rem] h-[20px] py-2 items-center w-[60px]"
                  alt="dash image"
                />

                <p
                  className="text-center text-[#47A7FD] text-sm cursor-auto"
                  onClick={() => handleClick("verification_documents")}
                >
                  <span className="text-black">
                    {inputs.verification_documents.length
                      ? `${inputs.verification_documents
                          .map((file) => file.name)
                          .join(", ")} `
                      : " Click here to Add your files here "}
                  </span>
                </p>
              </label>
              <input
                src="/assets/dashicons.svg"
                id="fileInput-verification_documents"
                name="verification_documents"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e, "verification_documents")}
                ref={fileInputRefs.verification_documents}
              />
            </div>
          </div>

          <div className="w-full mb-1 sm:mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>

            <textarea
              value={inputs.bio}
              onChange={(e) => handleOnChange(e.target.value, "bio")}
              type="text"
              name="bio"
              placeholder=""
              required
              rows="3"
              className="w-full mb-1 sm:mb-4  px-4 py-2 text-gray-500 border-2 outline-none hover:border-primary focus:border-blue-500 focus:outline-none shadow-sm rounded-lg"
            ></textarea>
          </div>
        </div>
      );
    };

     const stepStudent2 = () => {
       return (
         <div>
           <div className="my-4">
             <h1 className="text-black text-sm font-bold">Profile Details</h1>
             <p className="text-black text-xs">
               Plese make sure you provied accurate details about your self.
             </p>
           </div>

           <div className="flex items-center space-x-3">
             <div className="mb-2 sm:mb-4 w-full">
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Country
               </label>

               <select
                 disabled
                 name="country"
                 value={inputs?.country}
                 onChange={(e) => handleOnChange(e.target.value, "country")}
                 className="w-full px-4 py-3 text-gray-500 border-2 outline-none hover:border-primary focus:border-blue-500 focus:outline-none shadow-sm rounded-lg shadow-sm rounded-lg"
               >
                 <option value="" disabled>
                   Select Country
                 </option>
                 {countries.map((country, index) => (
                   <option key={index} value={country?.name}>
                     {country?.name}
                   </option>
                 ))}
               </select>
             </div>

             <div className="mb-2 sm:mb-4 w-full">
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 State
               </label>

               <select
                 name="state"
                 value={inputs?.state}
                 onChange={(e) => handleOnChange(e.target.value, "state")}
                 className="w-full px-4 py-3 text-gray-500 border-2 outline-none hover:border-primary focus:border-blue-500 focus:outline-none shadow-sm rounded-lg shadow-sm rounded-lg"
               >
                 <option value="" disabled>
                   Select State
                 </option>
                 {states.map((state, index) => (
                   <option key={index} value={state?.name}>
                     {state?.name}
                   </option>
                 ))}
               </select>
             </div>
           </div>

           <div className="flex items-center space-x-3">
             <div className="mb-2 sm:mb-4 w-full">
               <TextInput
                 disabled={false}
                 placeholder="High School"
                 label="Grade Level"
                 onChange={(e) => handleOnChange(e.target.value, "grade_level")}
               />
             </div>

             <div className="mb-2 sm:mb-4 w-full">
               <TextInput
                 disabled={false}
                 placeholder="English language, Mathematics"
                 label="Subjects of interest"
                 onChange={(e) =>
                   handleOnChange(e.target.value, "subjects_of_interest")
                 }
               />
             </div>
           </div>

           <div className="flex items-center space-x-3">
             <div className="mb-2 sm:mb-4 w-full">
               <label className="block text-sm font-medium text-gray-700 mb-1">
                 Learning Mode
               </label>

               <select
                 name="learning_mode"
                 value={inputs?.learning_mode}
                 onChange={(e) =>
                   handleOnChange(e.target.value, "learning_mode")
                 }
                 className="w-full px-4 py-3 text-gray-500 border-2 outline-none hover:border-primary focus:border-blue-500 focus:outline-none shadow-sm rounded-lg"
               >
                 <option value="" disabled>
                   Select Learning Mode
                 </option>
                 {["online", "in-person", "hybrid"].map((mode, index) => (
                   <option key={index} value={mode}>
                     {mode}
                   </option>
                 ))}
               </select>
             </div>
           </div>

           <div className="w-full">
             <label className="block text-sm font-medium text-gray-700 mb-1">
               Learning Objectives
             </label>

             <textarea
               value={inputs.learning_objectives}
               onChange={(e) =>
                 handleOnChange(e.target.value, "learning_objectives")
               }
               type="text"
               name="learning_objectives"
               placeholder=""
               required
               rows="3"
               className="w-full mb-1 sm:mb-4  px-4 py-2 text-gray-500 border-2 outline-none hover:border-primary focus:border-blue-500 focus:outline-none shadow-sm rounded-lg"
             ></textarea>
           </div>
         </div>
       );
     };

    const studentForm = () => {
      return <div>{currentStep === 0 ? step1() : stepStudent2()}</div>;
    }

      const tutorForm = () => {
        return (
          <div>
            {currentStep === 0
              ? step1()
              : stepTutor2()}
          </div>
        );
      };


    const hadleViewForm = () => {
      switch (type) {
        case "student":
          return studentForm();
        case "tutor":
          return tutorForm();
        default:
          break;
      }
    }

    const getButtonText = () => {
      switch (currentStep) {
        case 0:
          return "Next";
        case 1:
          return "Create Account";
        default:
          return "Create Account";
      }
    };

    const handleNext = () => {
      switch (currentStep) {
        case 0:
          var keys = [
            "full_name",
            "email",
            "password",
            "password_confirmation",
            "phone_number",
            "profile_image",
          ];
          var allow = ValidateInput(inputs, keys);
          if (allow.status) {
            setCurrentStep(1);
          } else {
            showErrorToast(allow.message);
          }
          break;
        case 1:
          var keyStep2 =
            type === "student"
              ? [
                  "grade_level",
                  "subjects_of_interest",
                  "learning_objectives",
                  "learning_mode",
                  "state",
                ]
              : [
                  "qualifications",
                  "subjects",
                  "experience_years",
                  "availability_schedule",
                  "hourly_rate",
                  "state",
                  "country",
                  "teaching_mode",
                  "bio",
                ];
          var allowStep2 = ValidateInput(inputs, keyStep2);
          if (allowStep2.status) {
            handleSubmit();
          } else {
            showErrorToast(allowStep2.message);
          }
          break;
        default:
          setCurrentStep(0);
      }
    };


  return (
    <Mainlayout>
      <PageSEO
        title={`Create ${type} account`}
        description={siteSettings.description}
      />

      <div className="flex items-center justify-center min-h-screen max-w-xl mx-auto">
        <div className="w-full p-8">
          <h1 className="text-2xl font-bold mb-1 sm:mb-4">Create {type} account</h1>

         
          <div className="flex items-center mb-1 sm:mb-4 space-x-3">
            {tabLength.map((_, index) => (
              <button
                onClick={() => handleTabPress(index)}
                key={index}
                className={`w-full h-[10px] ${
                  currentStep === index ? "bg-primary" : "bg-gray-300"
                } rounded-lg`}
              />
            ))}
          </div>

          <div>{hadleViewForm()}</div>

          {/* Button */}
          <button
            onClick={handleNext}
            type="submit"
            className="flex items-center justify-center space-x-2 w-full py-3 px-5 bg-primary text-white border-2 border-black font-bold rounded-lg transition"
          >
            <p>{getButtonText()}</p>
            {isLoading && <LoaderIcon />}
          </button>

          <div className="flex items-center justify-between mt-4">
            <Link
              href="#"
              className="text-black text-sm underline font-semibold hover:text-primary"
            >
              Already registered? <Link href="/login">Login</Link>
            </Link>
          </div>

          {/* Terms and Privacy */}
          <p className="text-sm text-center text-gray-500 mt-6">
            By clicking Create Account, you agree to{" "}
            <span className="text-xs font-semibold">{siteSettings.title}</span>{" "}
            <Link
              href="#"
              className="text-black text-xs underline font-semibold hover:text-primary"
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="text-black text-xs underline font-semibold hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Register