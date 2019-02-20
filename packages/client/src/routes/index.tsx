import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "../scss/main.scss";
import App from "./App";
import Login from "./Login";
import Register from "./Register";

export default () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/" component={App} />
  </Switch>
);
