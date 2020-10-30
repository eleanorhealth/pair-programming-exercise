import React from "react";
import { List } from "antd";

import { Member } from "types/member";

interface IMemberNamesListProps {
  members: Member[];
}

export default function MemberList({ members }: IMemberNamesListProps) {
  return (
    <List<Member>
      dataSource={members}
      locale={{ emptyText: "No member records loaded." }}
      renderItem={({ name: { first, last } }) => (
        <List.Item>{`${first} ${last}`}</List.Item>
      )}
    />
  );
}
