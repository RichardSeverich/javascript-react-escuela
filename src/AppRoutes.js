// React
import React from "react";
import { Route, Switch } from "react-router-dom";
// Components
import App from "./App";
import Login from "./components/login/Login";
import NavigationBar from "./components/nav-bar/NavigationBar";
import UsersForm from "./components/users/Form";
import UsersTable from "./components/users/Table";
import StudentsForm from "./components/students/Form";
import StudentsTable from "./components/students/Table";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/users-form" component={UsersForm} />
      <Route exact path="/users-table" component={UsersTable} />
      <Route exact path="/students-form" component={StudentsForm} />
      <Route exact path="/students-table" component={StudentsTable} />
      <Route exact path="/nav-bar" component={NavigationBar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Login} />
      <Route component={Login} />
    </Switch>
  </App>
);

export default AppRoutes;
