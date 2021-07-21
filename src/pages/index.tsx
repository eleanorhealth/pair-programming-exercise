import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

import pageToRoute from "pages/utility/pageToRoute";

import Home from "pages/Home";
import Members from "pages/Members";
import NoMatch404 from "pages/NoMatch404";

const PageRoutes = [Home, Members]
  // NoMatch404 route has `navPath: ""` so it matches every route. Should be added last.
  .concat(NoMatch404)
  .map(pageToRoute);

const Pages: ReactNode = [
  <Route key="redirect" path="/" exact>
    <Redirect to="/home" />
  </Route>,
  ...PageRoutes,
];

export default Pages;
