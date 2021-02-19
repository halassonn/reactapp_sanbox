import React from "react";
import { Switch, Redirect } from "react-router-dom";
import RouterWithLayout from "./Routerwithlayout";
import Main from "../layout/main";
import Home from "../pages/Home";
import ChooseTheme from "../pages/ChooseTheme";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouterWithLayout component={Home} exact layout={Main} path="/home" />
      <RouterWithLayout
        component={NotFound}
        exact
        layout={Main}
        path="/not-found"
      />
      <RouterWithLayout
        component={ChooseTheme}
        exact
        layout={Main}
        path="/choosetheme"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};
export default Routes;
