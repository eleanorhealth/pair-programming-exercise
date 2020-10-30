import { Layout } from "antd";
import styled from "styled-components";

import { getColor, getSpacing } from "theme/getters";

export const StyledLeftNav = styled.div`
  display: grid;
  grid-gap: ${getSpacing("xs")};
  grid-template-rows: 100px 1fr 80px;
  height: 100vh;
  overflow: auto;
  .ant-layout-sider-children {
    display: grid;
    grid-template-rows: 100px 1fr 80px;
    grid-gap: ${getSpacing("xs")};
  }
  footer {
    display: flex;
    padding-bottom: ${getSpacing("xs")};
  }
  footer > * {
    align-self: center;
    justify-self: center;
  }
`;

export const MainLayout = styled(Layout)`
  min-height: 100vh;
  padding: ${getSpacing("sm")} ${getSpacing("lg")};
  .ant-layout-header {
    border-bottom: 1px solid ${getColor("border")};
    margin: ${getSpacing("lg")} 0;
    padding: 0;
  }
  .ant-page-header {
    margin: 0;
    padding: 0;
  }
  .ant-layout-content {
    padding: 0;
  }
`;

export const StyledImg = styled.img`
  display: flex;
  height: 80px;
  margin: 10px auto;
  width: 80px;
`;
