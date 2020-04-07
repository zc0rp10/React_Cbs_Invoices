import React, { useState } from "react";

import { getInvoices } from "../services/tempDatabaseService";

const Invoices = () => {
  const [invoices, setInvoices] = useState(getInvoices());

  function handleDelete(invoice) {
    setInvoices(prevState => prevState.filter(inv => inv._id !== invoice._id));
  }

  const count = invoices.length;

  if (count === 0)
    return <p className="px-4 py-4">There are no invoice in the database.</p>;

  return (
    <div>
      <p className="px-4 py-4">Showing {count} invoices in the database.</p>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-4 border-b text-left">Inv #</th>
            <th className="px-4 py-4 border-b text-left">Date</th>
            <th className="px-4 py-4 border-b text-left">Company</th>
            <th className="px-4 py-4 border-b text-left">Amount</th>
            <th className="px-4 py-4 border-b text-left"></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => {
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
                <td className="px-4 py 2 text-sm border-b">
                  <button
                    onClick={() => handleDelete(invoice)}
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
    </div>
  );
};

export default Invoices;
