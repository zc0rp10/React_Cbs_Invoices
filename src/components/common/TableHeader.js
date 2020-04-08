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
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
            className="px-4 py-4 border-b text-left"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
