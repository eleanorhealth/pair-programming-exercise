/* eslint-disable @typescript-eslint/indent */
import { ReactText, ComponentType, ReactNode } from "react";
import { RouteComponentProps, RouteProps } from "react-router-dom";

// A Page is mostly a Route, with the addition of a "title" field.
// It is generic where `T` is the route parameters.
export type Page<T = void> = Pick<
  RouteProps,
  "exact" | "location" | "sensitive" | "strict"
> & {
  component: ComponentType<RouteComponentProps<T>>;
  // Will default to PageLayout
  layout?: ComponentType<IPageLayoutProps>;
  navIcon?: ComponentType;
  // RouteProps["path"] is type string | string[] | undefined
  // add a new required field `navPath` of type string,
  // which will be used for menu items and Links
  navPath: string;
  title: ReactText;
};

// Each page layout should be prepared to accept a `title` and children content.
export interface IPageLayoutProps {
  children: ReactNode;
  title: ReactText;
}
