import React, { useRef, useState } from 'react'
import { Country, State } from "country-state-city";
import { useRouter } from 'next/router';
import { LoaderIcon } from 'react-hot-toast';

import Client from '@/context/Client';
import { sendError, ValidateInput } from '@/hooks/helpers';
import { showErrorToast, showSuccessToast } from './CustomToast';
import TextInput from './TextInput';

const TutorSetup = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [inputs, setInputs] = useState({
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
    });

      const fileInputRefs = useRef({
        verification_documents: React.createRef(),
      });

    const [countries, setCountries] = useState(Country.getAllCountries());
    const selectedCountry = countries.find(
      (country) => country.name === inputs.country
    );
    const states = State.getAllStates().filter(
      (state) => state.countryCode === selectedCountry.isoCode
    );

    const handleOnChange = (text, input) => {
      setInputs((prevState) => ({ ...prevState, [input]: text }));
    };

    const handleSubmit = async () => {
        setIsLoading(true);

      try {
        const keys = [
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

        const allow = ValidateInput(inputs, keys);

        if (allow.status) {
            const formData = new FormData();

            Object.keys(inputs).forEach((key) => {
              if (key !== "verification_documents") {
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


          Client()
            .post("/user/tutor/update/profile", formData)
            .then((response) => {
                setIsLoading(false);
              const { data } = response;
              showSuccessToast(data.message);
              router.replace("/");
            })
            .catch((error) => {
                setIsLoading(false);
              const errorMessage = sendError(error);
              showErrorToast(
                errorMessage?.message ??
                  "There was an error completing your profile update. Please try again!"
              );
            });
        } else {
            setIsLoading(false);
          showErrorToast(allow.message);
        }
      } catch (error) {
        setIsLoading(false);
        const errorMessage = sendError(error);
        showErrorToast(
          errorMessage?.error ??
            "There was an error completing your profile update. Please try again!"
        );
      }
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
    }

    return (
      <div className="mt-10">
        <div className="flex items-center space-x-3">
          <div className="mb-4 w-full">
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

          <div className="mb-4 w-full">
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
          <div className="mb-4 w-full">
            <TextInput
              disabled={false}
              placeholder="NCE"
              label="Qualifications"
              onChange={(e) => handleOnChange(e.target.value, "qualifications")}
            />
          </div>

          <div className="mb-4 w-full">
            <TextInput
              disabled={false}
              placeholder="English language, Mathematics"
              label="Subjects of interest"
              onChange={(e) => handleOnChange(e.target.value, "subjects")}
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="mb-4 w-full">
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

          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teaching Mode
            </label>

            <select
              name="teaching_mode"
              value={inputs?.teaching_mode}
              onChange={(e) => handleOnChange(e.target.value, "teaching_mode")}
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

        <div className="flex items-center space-x-3">
          <div className="mb-4 w-full">
            <TextInput
              disabled={false}
              placeholder="4"
              type="number"
              label="Hourly Rate"
              onChange={(e) => handleOnChange(e.target.value, "hourly_rate")}
            />
          </div>

          <div className="mb-4 w-full">
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
          <label className="text-sm text-black">
            <span className="text-[#D60000]">*</span>
            <i>Upload Verification Certificate</i>
          </label>

          <div className="w-full border-[1px] rounded-xl">
            <label
              htmlFor="fileInput-verification_documents"
              className="cursor-pointer"
            >
              <img
                src="/assets/dashicons.svg"
                className="px-[10rem] h-[60px] py-2 items-center w-[60px]"
                alt="dash image"
              />

              <p
                className="text-center text-[#47A7FD] text-sm cursor-auto"
                onClick={() => handleClick("verification_documents")}
              >
                <span className="text-black">
                  {inputs.verification_documents.length
                    ? `${inputs.verification_documents.map(file => file.name).join(", ")} `
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

        <div className="w-full mb-4">
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
            className="w-full mb-4  px-4 py-2 text-gray-500 border-2 outline-none hover:border-primary focus:border-blue-500 focus:outline-none shadow-sm rounded-lg"
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="flex items-center justify-center space-x-2 w-full py-3 px-5 bg-primary text-white border-2 border-black font-bold rounded-lg transition"
        >
          <p>Update Profile</p>
          {isLoading && <LoaderIcon />}
        </button>
      </div>
    );
};

export default TutorSetup