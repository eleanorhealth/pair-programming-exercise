import React from "react";
import { Route } from "react-router-dom";

import PageRouteContainer from "pages/utility/PageRouteContainer";

import { Page } from "pages/types";

// Convert a Page object to a Route, passing down the title to PageTitleWrapper
export default function pageToRoute<T>(page: Page<T>) {
  const { exact, location, sensitive, strict, navPath } = page;
  return (
    <Route
      exact={exact}
      location={location}
      sensitive={sensitive}
      strict={strict}
      key={navPath}
      path={navPath}
      render={(componentProps) => (
        <PageRouteContainer page={page} componentProps={componentProps} />
      )}
    />
  );
}
