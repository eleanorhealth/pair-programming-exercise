import { Alert, Box, Spinner } from "@chakra-ui/react";
import React, { ReactNode } from "react";

import MemberList from "components/MemberList";

import useGetMembers from "hooks/useGetMembers";

export default function MemberDataContainer() {
  const { data: members, isError, isFetched, isLoading } = useGetMembers();

  let statusMessage: ReactNode;
  if (isLoading) {
    statusMessage = <Spinner />;
  } else if (isError) {
    statusMessage = (
      <Alert status="warning">There was an error loading members.</Alert>
    );
  }

  return (
    <Box maxWidth="45rem">
      {statusMessage}
      {isFetched && <MemberList members={members || []} />}
    </Box>
  );
}
