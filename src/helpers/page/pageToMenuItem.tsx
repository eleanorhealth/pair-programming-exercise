import React from "react";
import { Menu } from "antd";

import PageLink from "components/PageLink";
import { Page } from "pages/types";

export default function pageToMenuItem<T>(page: Page<T>) {
  const { navPath, navIcon: NavIcon } = page;
  return (
    <Menu.Item key={navPath} icon={NavIcon ? <NavIcon /> : undefined}>
      <PageLink page={page} />
    </Menu.Item>
  );
}
