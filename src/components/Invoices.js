import React, { useState } from "react";

import Pagination from "./Pagination";
import { getInvoices } from "../services/tempDatabaseService";
import { paginate } from "../utils/paginate";

const Invoices = () => {
  const [invoices, setInvoices] = useState(getInvoices());
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  function handleDelete(invoice) {
    setInvoices(prevState => prevState.filter(inv => inv._id !== invoice._id));
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const count = invoices.length;
  if (count === 0)
    return <p className="px-4 py-4">There are no invoice in the database.</p>;

  const paginatedInvoices = paginate(invoices, currentPage, pageSize);

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
      <Pagination
        invoiceCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Invoices;
