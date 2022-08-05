import { Route } from "@src/typings/routes";
import { lazy } from "react";

const UserRoutes: Route[] = [
  {
    path: "/users",
    component: lazy(() => import("@src/pages/User")),
  },
];

export default UserRoutes;
