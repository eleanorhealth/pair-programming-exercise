import React from "react";
import { Route } from "react-router-dom";

import PageRouteContainer from "components/PageRouteContainer";

import { Page } from "pages/types";
import { pick } from "ramda";

// Convert a Page object to a Route, passing down the title to PageTitleWrapper
export default function pageToRoute<T>(page: Page<T>) {
  const routeProps = pick(["exact", "location", "sensitive", "strict"], page);
  return (
    <Route
      {...routeProps}
      key={page.navPath}
      path={page.navPath}
      render={(componentProps) => (
        <PageRouteContainer page={page} componentProps={componentProps} />
      )}
    />
  );
}
