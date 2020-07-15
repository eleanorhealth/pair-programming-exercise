import React from "react";
import { List } from "antd";

import { IMember } from "store/reducers/clinical/types";

interface IMemberNamesListProps {
  members: IMember[];
}

export default function MemberList({ members }: IMemberNamesListProps) {
  return (
    <List<IMember>
      dataSource={members}
      locale={{ emptyText: "No member records loaded." }}
      renderItem={({ name: { first, last } }) => (
        <List.Item>{`${first} ${last}`}</List.Item>
      )}
    />
  );
}
