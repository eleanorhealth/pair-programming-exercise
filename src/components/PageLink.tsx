import React from "react";
import { Link, LinkProps } from "react-router-dom";

import { Page } from "pages/types";

interface IPageLink<T, S> extends Omit<LinkProps<S>, "to"> {
  page: Page<T>;
}

export default function PageLink<T, S>({
  children,
  page: { navPath, title },
  ...forward
}: IPageLink<T, S>) {
  return (
    <Link to={navPath} {...forward}>
      {children || title}
    </Link>
  );
}
