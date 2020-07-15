import React from "react";
import { Layout } from "antd";

import Menu from "components/Menu";
import PageHeader from "components/PageHeader";
import ErrorBoundary from "components/ErrorBoundary";

import { ELEANOR } from "app-constants";
import EleanorLogo from "assets/images/eleanor-logo.png";
import { IPageLayoutProps } from "pages/types";
import { StyledLeftNav, MainLayout, StyledImg } from "./styles";

const { Header, Content } = Layout;

export default function PageLayout({ children, title }: IPageLayoutProps) {
  const leftNavContent = (
    <StyledLeftNav>
      <StyledImg src={EleanorLogo} alt={ELEANOR} />
      <Menu />
    </StyledLeftNav>
  );

  const leftNav = <Layout.Sider>{leftNavContent}</Layout.Sider>;

  return (
    <Layout>
      {leftNav}
      <MainLayout>
        <Header>
          <PageHeader title={title} />
        </Header>
        <Content>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Content>
      </MainLayout>
    </Layout>
  );
}
