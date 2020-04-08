import React from "react";

//Components
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ columns, columnSort, onSort, data }) => {
  return (
    <table className="w-full">
      <TableHeader columns={columns} columnSort={columnSort} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
