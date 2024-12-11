import React from "react";

const Filters = () => {
  return (
    <div className="w-[70%] mx-auto bg-gray-100 p-4 rounded-md grid grid-cols-2  gap-4 items-center">
      <select
        className="border border-gray-300 rounded-lg px-4 py-2"
        aria-label="I want to learn"
      >
        <option>I want to learn</option>
        <option>English</option>
        <option>Spanish</option>
      </select>

      <select
        className="border border-gray-300 rounded-lg px-4 py-2"
        aria-label="Price per lesson"
      >
        <option>Price per lesson</option>
        <option>US$3 - US$40+</option>
      </select>

      <select
        className="border border-gray-300 rounded-lg px-4 py-2"
        aria-label="Country of birth"
      >
        <option>State Of Origin</option>
        <option>Any country</option>
      </select>

      <select
        className="border border-gray-300 rounded-lg px-4 py-2"
        aria-label="I'm available"
      >
        <option>I'm available</option>
        <option>Any time</option>
      </select>

      <input
        type="text"
        placeholder="Search by name or keyword"
        className="border border-gray-300 rounded-lg px-4 py-2 flex-grow"
      />
    </div>
  );
};

export default Filters;
