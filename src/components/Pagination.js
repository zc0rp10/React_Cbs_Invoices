import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ invoiceCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(invoiceCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6">
      <div>
        <span className="relative z-0 inline-flex shadow-sm">
          <button
            disabled={currentPage === 1 ? true : false}
            type="button"
            className="btn-pagination-prev"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {pages.map(page => (
            <button
              key={page}
              type="button"
              className={
                page === currentPage
                  ? "btn-pagination-nbr active"
                  : "btn-pagination-nbr"
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            disabled={currentPage === pageCount ? true : false}
            type="button"
            className="btn-pagination-next"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  invoiceCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
