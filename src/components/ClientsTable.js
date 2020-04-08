import React from "react";

//Components
import PaymentStatus from "./common/PaymentStatus";

const ClientsTable = ({
  onDelete,
  onPaymentStatus,
  paginatedInvoices,
}) => {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-4 border-b text-left">Inv #</th>
            <th className="px-4 py-4 border-b text-left">Date</th>
            <th className="px-4 py-4 border-b text-left">Client</th>
            <th className="px-4 py-4 border-b text-left">Amount</th>
            <th className="px-4 py-4 border-b text-left">Paid</th>
            <th className="px-4 py-4 border-b text-left"></th>
          </tr>
        </thead>
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

export default ClientsTable;
