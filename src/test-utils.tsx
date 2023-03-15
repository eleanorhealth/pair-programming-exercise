import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

import THEME from "theme";

// Base wrapper for tests that covers the general requirements (theme and routing)
export function BaseWrapper({ children }: { children?: ReactNode }) {
  return (
    <ChakraProvider theme={THEME}>
      <MemoryRouter>{children}</MemoryRouter>
    </ChakraProvider>
  );
}
