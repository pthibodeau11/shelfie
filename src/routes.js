import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import UpdateForm from "./Components/Form/UpdateForm";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Form} path="/addproduct" />
    <Route component={UpdateForm} path="/updateproduct" />
  </Switch>
);
