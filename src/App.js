import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./assets/styles/App.css";

//Components
import Invoices from "./components/Invoices";
import Clients from "./components/Clients";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <main className="px-8">
        <Switch>
          <Route path="/invoices" component={Invoices}></Route>
          <Route path="/clients" component={Clients}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/invoices" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
