import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//Components
import TextInput from "./common/TextInput";

const InvoiceForm = ({ match, history }) => {
  return (
    <div>
      <h1 className="text-2xl pb-8">Invoice Form - {match.params.id}</h1>
      <Formik
        initialValues={{
          invNbr: "",
          clientId: "",
          clientName: "",
          totalAmount: "",
          status: "",
          date: "",
        }}
        validationSchema={Yup.object({
          invNbr: Yup.number().required("Required"),
          clientId: Yup.string().required("Required"),
          clientName: Yup.string().required("Required"),
          totalAmount: Yup.number().required("Required"),
          status: Yup.string().required("Required"),
          date: Yup.date().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.table(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 200);
        }}
      >
        <Form>
          <TextInput label="Invoice #" name="invNbr" type="number" />
          <TextInput label="Client Id" name="clientId" type="string" />
          <TextInput label="Client Name" name="clientName" type="string" />
          <TextInput label="Total Amount" name="totalAmount" type="number" />
          <TextInput label="Payment Status" name="status" type="string" />
          <TextInput label="Invoice Date" name="date" type="date" />
          <button className="btn btn-primary mt-5" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default InvoiceForm;
