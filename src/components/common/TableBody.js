import React from "react";
import PropTypes from "prop-types";

const TableBody = ({ data, columns }) => {
  function renderCell(item, column) {
    if (column.content) {
      return column.content(item);
    } else if (column.path === "date") {
      return new Date(item[column.path]).toISOString().slice(0, 10);
    } else return item[column.path];
  }

  function createKey(item, column) {
    return item._id + (column.path || column.key);
  }

  return (
    <tbody>
      {data.map(item => {
        return (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={createKey(item, column)} className="px-4 py-2 text-sm border-b">
                {renderCell(item, column)}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableBody;
