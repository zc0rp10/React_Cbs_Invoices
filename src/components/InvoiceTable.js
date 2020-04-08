import React from "react";

//Components
import PaymentStatus from "./common/PaymentStatus";
import TableHeader from "./common/TableHeader";

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
    { path: "status", label: "Paid" },
    { key: "delete" },
  ];

  console.log(paginatedInvoices);

  return (
    <>
      <table className="w-full">
        <TableHeader
          columns={columns}
          columnSort={columnSort}
          onSort={onSort}
        />
        <tbody>
          {paginatedInvoices.map(invoice => {
            const date = new Date(invoice.date).toISOString().slice(0, 10);
            return (
              <tr key={invoice._id}>
                <td className="px-4 py-2 text-sm border-b">{invoice.invNbr}</td>
                <td className="px-4 py-2 text-sm border-b">{date}</td>
                <td className="px-4 py-2 text-sm border-b">
                  {invoice.clientName}
                </td>
                <td className="px-4 py-2 text-sm border-b">
                  {invoice.totalAmount}
                </td>
                <td className="px-4 py-2 text-sm border-b">
                  <PaymentStatus
                    invoice={invoice}
                    handlePaymentStatus={onPaymentStatus}
                  />
                </td>
                <td className="px-4 py 2 text-sm border-b">
                  <button
                    onClick={() => onDelete(invoice)}
                    className="btn btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default InvoiceTable;
