import React, { useMemo } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import Home from "pages/Home";
import Members from "pages/Members";
import pageToMenuItem from "helpers/page/pageToMenuItem";
import StyledMenu from "./styles";

const MENU_PAGES = [Home, Members];

function Menu({ location: { pathname } }: RouteComponentProps) {
  const menuItems = useMemo(() => MENU_PAGES.map(pageToMenuItem), []);

  return <StyledMenu selectedKeys={[pathname]}>{menuItems}</StyledMenu>;
}

export default withRouter(Menu);
