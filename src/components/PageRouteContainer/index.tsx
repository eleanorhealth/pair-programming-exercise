/* eslint-disable @typescript-eslint/indent */
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import PageLayout from "pages/layouts/PageLayout";

import useSetPageTitle from "hooks/useSetPageTitle";
import { Page } from "pages/types";

interface IPageTitleWrapperProps<T> {
  componentProps: RouteComponentProps<T>;
  page: Page<T>;
}

export default function PageRouteContainer<T>({
  componentProps,
  page: { component: Component, layout: LayoutComponent = PageLayout, title },
}: IPageTitleWrapperProps<T>) {
  useSetPageTitle(title);

  return (
    <LayoutComponent title={title}>
      <Component {...componentProps} />
    </LayoutComponent>
  );
}
