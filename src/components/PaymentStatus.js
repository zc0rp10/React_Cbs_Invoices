import React from "react";
import useToggler from "../hooks/useToggler";

const PaymentStatus = () => {
  const [isPaid, toggle] = useToggler();
  return (
    <div>
      {isPaid ? (
        <span
          className="material-icons-outlined text-green-600 cursor-pointer"
          onClick={toggle}
        >
          sentiment_satisfied
        </span>
      ) : (
        <span
          className="material-icons-outlined text-red-600 cursor-pointer"
          onClick={toggle}
        >
          sentiment_dissatisfied
        </span>
      )}
    </div>
  );
};

export default PaymentStatus;
