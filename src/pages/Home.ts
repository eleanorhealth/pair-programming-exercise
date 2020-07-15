import { HomeOutlined } from "@ant-design/icons";

import Placeholder from "components/Placeholder";
import { Page } from "./types";

const Home: Page = {
  component: Placeholder,
  navIcon: HomeOutlined,
  navPath: "/home",
  title: "Home",
};

export default Home;
