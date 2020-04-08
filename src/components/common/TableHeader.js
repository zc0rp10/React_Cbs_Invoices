import React from "react";

const TableHeader = ({ columns, columnSort, onSort }) => {
  function raiseSort(path) {
    //If same column is clicked flip sort order.
    //Otherwise sort new column by "asc"
    const newColumnSort = { ...columnSort };
    if (newColumnSort.path === path) {
      newColumnSort.order = newColumnSort.order === "asc" ? "desc" : "asc";
    } else {
      newColumnSort.path = path;
      newColumnSort.order = "asc";
    }
    onSort(newColumnSort);
  }

  function renderSortIcon(column) {
    if (column.path !== columnSort.path) return null;
    if (columnSort.order === "asc")
      return (
        <svg
          class="inline-block fill-current text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7 14l5-5 5 5H7z" />
        </svg>
      );
    return (
      <svg
        class="inline-block fill-current text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    );
  }

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
            className="px-4 py-4 border-b text-left cursor-pointer"
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
