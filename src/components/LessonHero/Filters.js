// import React from "react";

// const Filters = () => {
//   return (
//     <div className="w-[70%] mx-auto bg-gray-100 p-4 rounded-md grid grid-cols-2  gap-4 items-center">
//       <select
//         className="border border-gray-300 rounded-lg px-4 py-2"
//         aria-label="I want to learn"
//       >
//         <option>I want to learn</option>
//         <option>English</option>
//         <option>Spanish</option>
//       </select>

//       <select
//         className="border border-gray-300 rounded-lg px-4 py-2"
//         aria-label="Price per lesson"
//       >
//         <option>Price per lesson</option>
//         <option>US$3 - US$40+</option>
//       </select>

//       <select
//         className="border border-gray-300 rounded-lg px-4 py-2"
//         aria-label="Country of birth"
//       >
//         <option>State Of Origin</option>
//         <option>Any country</option>
//       </select>

//       <select
//         className="border border-gray-300 rounded-lg px-4 py-2"
//         aria-label="I'm available"
//       >
//         <option>I'm available</option>
//         <option>Any time</option>
//       </select>

//       <input
//         type="text"
//         placeholder="Search by name or keyword"
//         className="border border-gray-300 rounded-lg px-4 py-2 flex-grow"
//       />
//     </div>
//   );
// };

// export default Filters;





import React from "react";

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div className="w-[70%] mx-auto bg-gray-100 p-4 rounded-md grid grid-cols-2 gap-4 items-center">
      {/* Subject Filter */}
      <input
        type="text"
        name="subject"
        value={filters.subject}
        onChange={onFilterChange}
        placeholder="Search by Subject"
        className="border border-gray-300 rounded-lg px-4 py-2"
      />

      {/* Price Filter */}
      <input
        type="text"
        name="price"
        value={filters.price}
        onChange={onFilterChange}
        placeholder="Search by Price"
        className="border border-gray-300 rounded-lg px-4 py-2"
      />

      {/* State Filter */}
      <input
        type="text"
        name="state"
        value={filters.state}
        onChange={onFilterChange}
        placeholder="Search by State of Origin"
        className="border border-gray-300 rounded-lg px-4 py-2"
      />

      {/* Availability Filter */}
      <input
        type="text"
        name="availability"
        value={filters.availability}
        onChange={onFilterChange}
        placeholder="Search by Availability"
        className="border border-gray-300 rounded-lg px-4 py-2"
      />

      {/* Search by Name or Keyword */}
      <input
        type="text"
        name="search"
        value={filters.search}
        onChange={onFilterChange}
        placeholder="Search by name or keyword"
        className="border border-gray-300 rounded-lg px-4 py-2 flex-grow"
      />
    </div>
  );
};

export default Filters;
