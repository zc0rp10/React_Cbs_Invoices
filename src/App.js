import React from "react";
import "./assets/styles/App.css";

import Invoices from "./components/Invoices";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Invoices />
    </div>
  );
}

export default App;
