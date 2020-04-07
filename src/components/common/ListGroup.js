import React from "react";

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
    if (item === selectedItem) classes += " active";

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

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
