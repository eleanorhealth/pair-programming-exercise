import React from "react";
import { ChatIcon } from "@chakra-ui/icons";
import { Tag, TagLeftIcon } from "@chakra-ui/react";

export default function UnreadMessageTag() {
  return (
    <Tag backgroundColor="yellow.100" color="yellow.800">
      <TagLeftIcon as={ChatIcon} />
      Unread Messages
    </Tag>
  );
}
