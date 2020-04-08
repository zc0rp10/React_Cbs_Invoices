import React, { useState, useEffect } from "react";

//Components
import ClientsTable from "./ClientsTable";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";

//Utils
import { paginate } from "../utils/paginate";

//Temp "Database"
import { getInvoices } from "../services/tempInvoiceService";
import { getClients } from "../services/tempClientService";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [clients, setClients] = useState([]);
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState();

  useEffect(() => {
    const clientList = [{ name: "All Clients" }, ...getClients()];

    setInvoices(getInvoices);
    setClients(clientList);
  }, []);

  function handleDelete(invoice) {
    setInvoices(prevState => prevState.filter(inv => inv._id !== invoice._id));
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleClientSelect(client) {
    setSelectedClient(client);
    setCurrentPage(1);
  }

  function handlePaymentStatus(id) {
    const updatedInvoices = invoices.map(inv => {
      if (inv._id === id) {
        return { ...inv, status: !inv.status };
      }
      return inv;
    });
    setInvoices(updatedInvoices);
  }

  const count = invoices.length;
  if (count === 0)
    return <p className="px-4 py-4">There are no invoice in the database.</p>;

  const filteredInvoices =
    selectedClient && selectedClient._id
      ? invoices.filter(inv => inv.clientId === selectedClient._id)
      : invoices;

  const paginatedInvoices = paginate(filteredInvoices, currentPage, pageSize);

  return (
    <div className="flex justify-between">
      <ListGroup
        items={clients}
        selectedItem={selectedClient}
        onItemSelect={handleClientSelect}
      />
      <div className="w-full pl-8">
        <p className="px-4 py-4">
          Showing {filteredInvoices.length} of {count} invoices in the database.
        </p>
        <ClientsTable
          paginatedInvoices={paginatedInvoices}
          onDelete={handleDelete}
          onPaymentStatus={handlePaymentStatus}
        />
        <Pagination
          invoiceCount={filteredInvoices.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Invoices;
