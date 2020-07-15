import PageNotFoundMessage from "components/PageNotFoundMessage";
import { Page } from "./types";

const NoMatch404: Page = {
  component: PageNotFoundMessage,
  navPath: "",
  title: "Page Not Found",
};

export default NoMatch404;
