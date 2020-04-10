import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

//Components
import InvoiceTable from "./InvoiceTable";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import SearchBox from "./common/SearchBox";

//Utils
import { paginate } from "../utils/paginate";

//Temp "Database"
import { getInvoices } from "../services/tempInvoiceService";
import { getClients } from "../services/tempClientService";
import { saveInvoice, deleteInvoice } from "../services/tempInvoiceService";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [clients, setClients] = useState([]);
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState({
    _id: "",
    name: "All Clients",
  });
  const [columnSort, setColumnSort] = useState({ path: "date", order: "asc" });
  const [searchQuery, setSearchQuery] = useState(""); //Will take a number, had to initialize with something otherwise React complained about chaning uncontrolled/controlled input. Had to iniate with empty string, cuz if I did with anumber it would overwite placeholder.

  const totalCount = invoices.length;

  useEffect(() => {
    const clientList = [{ _id: "", name: "All Clients" }, ...getClients()];

    setInvoices(getInvoices);
    setClients(clientList);
  }, []);

  function handleDelete(invoice) {
    deleteInvoice(invoice._id);
    setInvoices(prevState => prevState.filter(inv => inv._id !== invoice._id));
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleClientSelect(client) {
    setSearchQuery("");
    setSelectedClient(client);
    setCurrentPage(1);
  }

  function handleSort(newColumnSort) {
    setColumnSort(newColumnSort);
  }

  function handlePaymentStatus(id) {
    const updatedInvoices = invoices.map(inv => {
      if (inv._id === id) {
        inv = { ...inv, status: !inv.status };
        saveInvoice(inv);
        return inv;
      }
      return inv;
    });
    setInvoices(updatedInvoices);
  }

  function handleSearch(query) {
    setCurrentPage(1);
    setSelectedClient({
      _id: "",
      name: "All Clients",
    });
    setSearchQuery(query);
  }

  function getPaginatedData() {
    let filteredInvoices = invoices;

    if (searchQuery) {
      filteredInvoices = invoices.filter(inv => inv.invNbr.toString().includes(searchQuery));
    } else if (selectedClient && selectedClient._id) {
      filteredInvoices = invoices.filter(inv => inv.clientId === selectedClient._id);
    }

    const sortedInvoices = _.orderBy(filteredInvoices, [columnSort.path], [columnSort.order]);

    const paginatedInvoices = paginate(sortedInvoices, currentPage, pageSize);

    return { count: filteredInvoices.length, data: paginatedInvoices };
  }

  const { count, data } = getPaginatedData();

  if (totalCount === 0) return <p className="px-4 py-4">There are no invoice in the database.</p>;
  return (
    <div className="flex justify-between bg-white shadow-md rounded p-8 max-w-screen-xl mx-auto">
      <ListGroup items={clients} selectedItem={selectedClient} onItemSelect={handleClientSelect} />
      <div className="w-full pl-8">
        <div className="">
          <Link to={"/invoices/new"}>
            <button className="btn btn-primary inline-block">New Invoice</button>
          </Link>
          <p className="px-4 py-4 inline-block">
            Showing {count} of {totalCount} invoices in the database.
          </p>
        </div>

        <SearchBox value={searchQuery} onChange={handleSearch} />

        <InvoiceTable
          paginatedInvoices={data}
          columnSort={columnSort}
          onPaymentStatus={handlePaymentStatus}
          onDelete={handleDelete}
          onSort={handleSort}
        />
        <Pagination
          invoiceCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Invoices;
