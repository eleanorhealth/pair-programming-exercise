import React, { ReactNode } from "react";
import { Alert, Spin } from "antd";

import MemberList from "components/MemberList";

import useGetMembers from "hooks/useGetMembers";

import { StyledCard } from "./styles";

export default function MemberDataContainer() {
  const { data: members, isError, isFetched, isLoading } = useGetMembers();

  let statusMessage: ReactNode;
  if (isLoading) {
    statusMessage = <Spin />;
  } else if (isError) {
    statusMessage = <Alert message="There was an error loading members." />;
  }

  return (
    <StyledCard>
      {statusMessage}
      {isFetched && <MemberList members={members || []} />}
    </StyledCard>
  );
}
