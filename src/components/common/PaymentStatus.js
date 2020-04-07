import React from "react";
import PropTypes from "prop-types";

const PaymentStatus = ({ invoice, handlePaymentStatus }) => {
  let classes = "material-icons-outlined cursor-pointer";
  invoice.status
    ? (classes += " text-green-600")
    : (classes += " text-red-600");

  const icon = invoice.status
    ? "sentiment_satisfied"
    : "sentiment_dissatisfied";

  return (
    <>
      <span
        className={classes}
        onClick={() => handlePaymentStatus(invoice._id)}
      >
        {icon}
      </span>
    </>
  );
};

PaymentStatus.propTypes = {
  invoice: PropTypes.object.isRequired,
  handlePaymentStatus: PropTypes.func.isRequired,
};

export default PaymentStatus;
