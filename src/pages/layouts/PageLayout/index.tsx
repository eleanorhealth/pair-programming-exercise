import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

import ErrorBoundary from "components/ErrorBoundary";

import { ELEANOR } from "app-constants";
import EleanorLogo from "assets/images/eleanor-logo.png";
import { IPageLayoutProps } from "pages/types";

export default function PageLayout({ children, title }: IPageLayoutProps) {
  return (
    <Box as="main" padding={8}>
      <HStack
        borderBottom="1px solid rgb(228, 236, 246)"
        fontSize="xl"
        gridGap={2}
        paddingBottom={3}
        marginBottom={5}
      >
        <Image width="3rem" src={EleanorLogo} alt={ELEANOR} />
        <Text>{`${ELEANOR} - ${title}`}</Text>
      </HStack>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Box>
  );
}
