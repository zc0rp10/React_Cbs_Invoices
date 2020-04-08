import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./assets/styles/App.css";

//Components
import Invoices from "./components/Invoices";
import InvoiceForm from "./components/InvoiceForm";
import Clients from "./components/Clients";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-200">
      <NavBar />
      <main className="px-8">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/invoices/:id" component={InvoiceForm} />
          <Route path="/invoices" component={Invoices} />
          <Route path="/clients" component={Clients} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/invoices" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
