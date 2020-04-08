import React from "react";

const InvoiceForm = ({ match, history }) => {
  return (
    <div>
      <h1>Invoice Form</h1>
      <br />
      <p>{match.params.id}</p>
      <button className="btn btn-primary" onClick={() => history.push("/invoices")}>
        Save
      </button>
    </div>
  );
};

export default InvoiceForm;
