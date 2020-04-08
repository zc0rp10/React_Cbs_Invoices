import React from "react";

//Components
import PaymentStatus from "./common/PaymentStatus";
import Table from "./common/Table";

const InvoiceTable = ({
  paginatedInvoices,
  onDelete,
  onPaymentStatus,
  onSort,
  columnSort,
}) => {
  const columns = [
    { path: "invNbr", label: "Inv #" },
    { path: "date", label: "Date" },
    { path: "clientName", label: "Client" },
    { path: "totalAmount", label: "Amount" },
    {
      path: "status",
      label: "Paid",
      content: invoice => (
        <PaymentStatus
          status={invoice.status}
          onClick={() => onPaymentStatus(invoice._id)}
        />
      ),
    },
    {
      key: "delete",
      content: invoice => (
        <button onClick={() => onDelete(invoice)} className="btn btn-delete">
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={paginatedInvoices}
      columnSort={columnSort}
      onSort={onSort}
    />
  );
};

export default InvoiceTable;
