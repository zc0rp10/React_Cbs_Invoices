import React from "react";
import PropTypes from "prop-types";

const PaymentStatus = ({ status, onClick }) => {
  let classes = "material-icons-outlined cursor-pointer";
  status ? (classes += " text-green-600") : (classes += " text-red-600");

  const icon = status ? "sentiment_satisfied" : "sentiment_dissatisfied";

  return (
    <>
      <span className={classes} onClick={onClick}>
        {icon}
      </span>
    </>
  );
};

PaymentStatus.propTypes = {
  status: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaymentStatus;
