import { createContext, ReactText } from "react";

export type PageTitle = [ReactText, (title: ReactText) => void];

// Initialize page title context with a noop
const PageTitleContext = createContext<PageTitle>(["", () => null]);

export default PageTitleContext;
