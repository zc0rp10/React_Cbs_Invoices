import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./assets/styles/App.css";

//Components
import Invoices from "./components/Invoices";
import InvoiceForm from "./components/InvoiceForm";
import Clients from "./components/Clients";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import SignInForm from "./components/SignInForm";
import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-200">
      <NavBar />
      <main className="px-8">
        <Switch>
          <Route path="/signin" component={SignInForm} />
          <Route path="/invoices/:id" component={InvoiceForm} />
          <Route path="/invoices" component={Invoices} />
          <Route path="/clients" component={Clients} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/reports" component={Reports} />
          <Route from="/" exact component={Invoices} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
