import React from "react";
import PropTypes from "prop-types";

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

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnSort: PropTypes.object,
  onSort: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
