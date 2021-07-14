import React from "react";
import { HStack, Text, VStack } from "@chakra-ui/react";

import { Member } from "types/member";

interface IMemberNamesListProps {
  members: Member[];
}

export default function MemberList({ members }: IMemberNamesListProps) {
  const memberContent = members.map(({ name: { first, last } }) => (
    <HStack key={`${first}-${last}`}>
      <Text>{`${first} ${last}`}</Text>
    </HStack>
  ));

  return (
    <VStack alignItems="flex-start" gridGap={3}>
      {memberContent.length === 0 ? (
        <Text>No member records loaded.</Text>
      ) : (
        memberContent
      )}
    </VStack>
  );
}
