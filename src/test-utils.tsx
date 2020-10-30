/* eslint-disable import/prefer-default-export */
import React, { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import THEME from "theme";

// Base wrapper for tests that covers the general requirements (theme and routing)
export function BaseWrapper({ children }: { children?: ReactNode }) {
  return (
    <ThemeProvider theme={THEME}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );
}
