import React, { ReactText } from "react";
import { PageHeader as AntPageHeader } from "antd";

interface IPageHeaderProps {
  title: ReactText;
}

export default function PageHeader({ title }: IPageHeaderProps) {
  return <AntPageHeader title={title} />;
}
