import { Route } from "@src/typings/routes";
import { lazy } from "react";

const TestRoutes: Route[] = [
  {
    path: "/test",
    component: lazy(() => import("@src/pages/Test")),
  },
];

export default TestRoutes;
