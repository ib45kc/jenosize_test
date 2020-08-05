import React from "react";
import {  Switch, Route, Redirect } from "react-router-dom";
import { Main } from "../pages";
import { PlaceMenu } from "../pages/PlaceMenu";
import { Contact } from "../pages/Contact";

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/Home" component={Main} />
      <Route path="/PlaceMenu" component={PlaceMenu} />
      <Route path="/Contact" component={Contact} />
      <Route render={() => <Redirect to="/Home" />} />
    </Switch>
  );
};
