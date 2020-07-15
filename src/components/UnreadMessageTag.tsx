import React from "react";
import { Tag } from "antd";
import { CommentOutlined } from "@ant-design/icons";

export default function UnreadMessageTag() {
  return (
    <Tag color="gold" icon={<CommentOutlined />}>
      Unread Messages
    </Tag>
  );
}
