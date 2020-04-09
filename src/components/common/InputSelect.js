import React from "react";
import { useField } from "formik";

const InputSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <div className="inline-block relative w-64">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            {...field}
            {...props}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-xs italic mb">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default InputSelect;
