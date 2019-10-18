import React, { Component } from "react";
// import Dashboard from "../Dashboard/Dashboard";
// import Form from "../Form/Form";
import { HashRouter, Link } from "react-router-dom";
import routes from "../../routes";

function Header() {
  return (
    <HashRouter>
      {/* <Dashboard />
        <Form /> */}
      <header>
        <div>Shelfie</div>
        <Link to="/">Dashboard</Link>
        <Link to="/addproduct">Add Inventory</Link>
      </header>
      {routes}
    </HashRouter>
  );
}

export default Header;
