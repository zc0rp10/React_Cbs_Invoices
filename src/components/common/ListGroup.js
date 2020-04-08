import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  const itemList = items.map(item => {
    let classes =
      "list-group-item block w-32 py-3 border -mb-px text-center hover:bg-gray-100 cursor-pointer";
    if (_.isEqual(item, selectedItem)) classes += " active";

    return (
      <li
        key={item[valueProperty]}
        className={classes}
        onClick={() => onItemSelect(item)}
      >
        {item[textProperty]}
      </li>
    );
  });

  return (
    <div>
      <ul className="p-5">{itemList}</ul>
    </div>
  );
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  textProperty: PropTypes.any.isRequired,
  valueProperty: PropTypes.any.isRequired,
  onItemSelect: PropTypes.func,
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
