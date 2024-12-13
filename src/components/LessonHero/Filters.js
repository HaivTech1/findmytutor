import React from "react";

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div className="w-full lg:w-[70%] mx-auto bg-gray-100 p-4 rounded-md grid grid-cols-2 gap-4 items-center">
      {/* Subject Filter */}
      <input
        type="text"
        name="subject"
        value={filters.subject}
        onChange={onFilterChange}
        placeholder="Subject..."
        className="border border-gray-300 rounded-lg px-4 py-2"
      />

      {/* Price Filter */}
      <input
        type="text"
        name="price"
        value={filters.price}
        onChange={onFilterChange}
        placeholder="Price..."
        className="border border-gray-300 rounded-lg px-4 py-2"
      />

      {/* State Filter */}
      <input
        type="text"
        name="state"
        value={filters.state}
        onChange={onFilterChange}
        placeholder="State of Origin..."
        className="border border-gray-300 rounded-lg px-4 py-2"
      />

      {/* Availability Filter */}
      <input
        type="text"
        name="availability"
        value={filters.availability}
        onChange={onFilterChange}
        placeholder="Availability..."
        className="border border-gray-300 rounded-lg px-4 py-2"
      />

      {/* Search by Name or Keyword */}
      <input
        type="text"
        name="search"
        value={filters.search}
        onChange={onFilterChange}
        placeholder="Name..."
        className="border border-gray-300 rounded-lg px-4 py-2 flex-grow"
      />
    </div>
  );
};

export default Filters;
