import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        type="search"
        name="query"
        className="transition-colors duration-100 ease-in-out focus:outline-none border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
        placeholder="Search for an invoice by number.."
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
      <div className="pointer-events-none absolute inset-y-0 left-10 pl-4 flex items-center">
        <svg
          className="fill-current pointer-events-none text-gray-600 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
        </svg>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
