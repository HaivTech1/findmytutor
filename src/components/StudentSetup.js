import React, { useState } from 'react'
import { Country, State, City }  from 'country-state-city';
import { useRouter } from 'next/router';
import { LoaderIcon } from 'react-hot-toast';

import Client from '@/context/Client';
import { sendError, ValidateInput } from '@/hooks/helpers';
import { showErrorToast, showSuccessToast } from './CustomToast';
import TextInput from './TextInput';

const StudentSetup = ({user}) => {
//   console.log(JSON.stringify(State.getAllStates(), null, 2));
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    grade_level: "",
    subjects_of_interest: "",
    learning_objectives: "",
    learning_mode: "",
    state: "",
    country: "Nigeria",
  });

    const [countries, setCountries] = useState(Country.getAllCountries());
    const selectedCountry = countries.find((country) => country.name === inputs.country);
    const states = State.getAllStates().filter(
      (state) => state.countryCode === selectedCountry.isoCode
    );

    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    }

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
          const keys = [
            "grade_level",
            "subjects_of_interest",
            "learning_objectives",
            "learning_mode",
            "state",
          ];

          const allow = ValidateInput(inputs, keys);

          if (allow.status) {
                Client()
                .post("/user/student/update/profile", inputs)
                .then((response) => {
                    const { data } = response;
                    showSuccessToast(data.message);
                    router.replace("/");
                })
                .catch((error) => {
                    const errorMessage = sendError(error);
                    showErrorToast(
                    errorMessage?.message ??
                        "There was an error completing your profile update. Please try again!"
                    );
                });
          }else{
            showErrorToast(allow.message)
          }
        } catch (error) {
            const errorMessage = sendError(error);
            showErrorToast(
              errorMessage?.error ??
                "There was an error completing your profile update. Please try again!"
            );
        } finally {
            setIsLoading(true);
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
            placeholder="High School"
            label="Grade Level"
            onChange={(e) => handleOnChange(e.target.value, "grade_level")}
          />
        </div>

        <div className="mb-4 w-full">
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
        <div className="mb-4 w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Learning Mode
          </label>

          <select
            name="learning_mode"
            value={inputs?.learning_mode}
            onChange={(e) => handleOnChange(e.target.value, "learning_mode")}
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
          onChange={(e) => handleOnChange(e.target.value, "learning_objectives")}
          type="text"
          name="learning_objectives"
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
}

export default StudentSetup