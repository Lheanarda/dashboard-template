import { React } from "react";

export interface Navigation {
  id: string;
  Icon: React.ReactNode;
  navLink: string;
  title: string;
  children?: Navigation[];
}

export type Navigations = Navigation[];
