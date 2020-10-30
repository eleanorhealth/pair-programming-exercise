import React, { useState, ReactText } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactQueryDevtools } from "react-query-devtools";
import { ThemeProvider } from "styled-components";

import "./App.less";
import { APP_NAME, ELEANOR } from "app-constants";
import PageTitleContext from "helpers/context/PageTitleContext";
import Pages from "pages";
import THEME from "theme";

function App() {
  const pageTitleState = useState<ReactText>(APP_NAME);
  const [pageTitle] = pageTitleState;

  return (
    <>
      <Helmet>
        <title>{`${pageTitle} - ${ELEANOR}`}</title>
      </Helmet>
      <ThemeProvider theme={THEME}>
        <PageTitleContext.Provider value={pageTitleState}>
          <Router>
            <Switch>{Pages}</Switch>
          </Router>
        </PageTitleContext.Provider>
      </ThemeProvider>
      <ReactQueryDevtools position="bottom-right" />
    </>
  );
}

export default App;
