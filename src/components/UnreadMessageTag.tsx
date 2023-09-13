import React from "react";
import { ChatIcon } from "@chakra-ui/icons";
import { Tag, TagLeftIcon } from "@chakra-ui/react";
import { Message } from "../types/member";

export const countUnreadMessages = (messages: Message[]): number => {
  return messages.filter((message) => !message.read).length;
};

export default function UnreadMessageTag() {
  return (
    <Tag backgroundColor="yellow.100" color="yellow.800">
      <TagLeftIcon as={ChatIcon} />
      Unread Messages
    </Tag>
  );
}
