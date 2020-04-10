import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//Components
import InputText from "./common/InputText";
import InputSelect from "./common/InputSelect";

//Temp "Database"
import { getInvoice, saveInvoice } from "../services/tempInvoiceService";
import { getClients } from "../services/tempClientService";

const InvoiceForm = ({ match, history }) => {
  const [invoice, setInvoice] = useState({
    _id: "",
    invNbr: "",
    clientId: "",
    totalAmount: "",
    date: "",
  });
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(getClients);
    const invoiceId = match.params.id;
    //Case 1: New Invoice -> Escape befor checking for match
    if (invoiceId === "new") return;
    //Case 2: Incorrect URL/ID i.e not "new" & invoice does not exist. -> Escape if no match is found in DB
    const inv = getInvoice(invoiceId);
    if (!inv) return history.replace("/not-found");
    //Case 3: Invoice does exist - load the invoice to state and populate form
    setInvoice(mapToViewModel(inv));
  }, [history, match.params.id]);

  function mapToViewModel(invoice) {
    return {
      _id: invoice._id,
      invNbr: invoice.invNbr,
      clientId: invoice.clientId,
      totalAmount: invoice.totalAmount,
      date: invoice.date,
    };
  }

  return (
    <div className="bg-white shadow-md rounded-md p-8 max-w-screen-xl mx-auto">
      <h1 className="text-2xl pb-8">Invoice Form</h1>
      <Formik
        enableReinitialize
        initialValues={{
          _id: invoice._id,
          invNbr: invoice.invNbr,
          clientId: invoice.clientId,
          totalAmount: invoice.totalAmount,
          date: invoice.date || new Date().getTime(),
        }}
        validationSchema={Yup.object({
          invNbr: Yup.number().required("Required"),
          clientId: Yup.string().required("Required"),
          totalAmount: Yup.number().required("Required"),
          date: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          saveInvoice(values);
          history.push("/invoices");
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputText label="Invoice #" name="invNbr" type="number" />
            <InputSelect label="Client" name="clientId" options={clients} />
            <InputText label="Total Amount" name="totalAmount" type="number" />
            <InputText label="Invoice Date" name="date" type="number" />
            <button className="btn btn-primary mt-5" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InvoiceForm;
