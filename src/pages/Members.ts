import { TeamOutlined } from "@ant-design/icons";

import MemberDataContainer from "containers/MemberDataContainer";
import { Page } from "./types";

const MemberList: Page = {
  component: MemberDataContainer,
  navIcon: TeamOutlined,
  navPath: "/members",
  title: "Member List",
};

export default MemberList;
