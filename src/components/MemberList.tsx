import React from "react";
import { Flex, Grid, Text } from "@chakra-ui/react";

import { Member } from "types/member";

interface Props {
  members: Member[];
}

export default function MemberList({ members }: Props) {
  const memberContent = members.map(({ id, name: { first, last } }) => (
    <Grid key={id}>
      <Text key={id}>{`${first} ${last}`}</Text>
    </Grid>
  ));

  return (
    <Flex direction="column" gridGap={3}>
      {members.length === 0 ? (
        <Text>No member records loaded.</Text>
      ) : (
        memberContent
      )}
    </Flex>
  );
}
