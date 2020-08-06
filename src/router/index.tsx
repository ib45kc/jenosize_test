import React from "react";
import {  Switch, Route, Redirect } from "react-router-dom";
import { Main } from "../pages";
import { PlaceMenu } from "../pages/PlaceMenu";
import { Contact } from "../pages/Contact";

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/Home" component={Main} />
      <Route exact path="/PlaceMenu" component={PlaceMenu} />
      <Route exact path="/Contact" component={Contact} />
      <Route render={() => <Redirect to="/Home" />} />
    </Switch>
  );
};
