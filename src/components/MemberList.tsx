import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { Member } from "types/member";

interface IMemberNamesListProps {
  members: Member[];
}

export default function MemberList({ members }: IMemberNamesListProps) {
  const memberContent = members.map(({ name: { first, last } }) => (
    <Flex key={`${first}-${last}`} direction="row">
      <Text>{`${first} ${last}`}</Text>
    </Flex>
  ));

  return (
    <Flex alignItems="flex-start" direction="column" gridGap={3}>
      {memberContent.length === 0 ? (
        <Text>No member records loaded.</Text>
      ) : (
        memberContent
      )}
    </Flex>
  );
}
