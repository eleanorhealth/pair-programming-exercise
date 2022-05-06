/* eslint-disable @typescript-eslint/indent */
import React from "react";

import PageLayout from "pages/layouts/PageLayout";

import useSetPageTitle from "hooks/useSetPageTitle";
import { Page } from "pages/types";

interface Props {
  component: Page["component"];
  title: Page["title"];
}

export default function PageRouteContainer({
  component: Component,
  title,
}: Props) {
  useSetPageTitle(title);

  return (
    <PageLayout title={title}>
      <Component />
    </PageLayout>
  );
}
