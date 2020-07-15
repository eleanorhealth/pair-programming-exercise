import React, { useState, ReactText } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { EnhancedStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";

import "./App.less";
import { APP_NAME, ELEANOR } from "app-constants";
import PageTitleContext from "helpers/context/PageTitleContext";
import Pages from "pages";
import appStore from "store";
import THEME from "theme";

interface IAppProps {
  store?: EnhancedStore<any>;
}

function App({ store = appStore }: IAppProps) {
  const pageTitleState = useState<ReactText>(APP_NAME);
  const [pageTitle] = pageTitleState;

  return (
    <>
      <Helmet>
        <title>{`${pageTitle} - ${ELEANOR}`}</title>
      </Helmet>
      <ThemeProvider theme={THEME}>
        <PageTitleContext.Provider value={pageTitleState}>
          <Provider store={store}>
            <Router>
              <Switch>{Pages}</Switch>
            </Router>
          </Provider>
        </PageTitleContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
