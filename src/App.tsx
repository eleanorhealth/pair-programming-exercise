import { ChakraProvider } from "@chakra-ui/react";
import React, { useState, ReactText } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactQueryDevtools } from "react-query-devtools";

import { APP_NAME, ELEANOR } from "app-constants";
import PageTitleContext from "helpers/context/PageTitleContext";
import Home from "pages/Home";
import Members from "pages/Members";
import PageRouteContainer from "pages/utility/PageRouteContainer";
import THEME from "theme";

function App() {
  const pageTitleState = useState<ReactText>(APP_NAME);
  const [pageTitle] = pageTitleState;

  return (
    <>
      <Helmet>
        <title>{`${pageTitle} - ${ELEANOR}`}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
      </Helmet>
      <ChakraProvider theme={THEME}>
        <PageTitleContext.Provider value={pageTitleState}>
          <Router>
            <Switch>
              <Route
                path={Home.navPath}
                render={() => (
                  <PageRouteContainer
                    component={Home.component}
                    title={Home.title}
                  />
                )}
              />
              <Route
                path={Members.navPath}
                render={() => (
                  <PageRouteContainer
                    component={Members.component}
                    title={Members.title}
                  />
                )}
              />
              <Route path="">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </Router>
        </PageTitleContext.Provider>
      </ChakraProvider>
      <ReactQueryDevtools position="bottom-right" />
    </>
  );
}

export default App;
