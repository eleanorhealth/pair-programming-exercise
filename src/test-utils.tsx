import React, { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";

import THEME from "theme";
import rootReducer from "store/reducers";

// Base wrapper for tests that covers the general requirements (theme and routing)
export function BaseWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={THEME}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );
}

export const makeStore = () => configureStore({ reducer: rootReducer });
