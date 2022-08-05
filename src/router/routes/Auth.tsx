import { Route } from "@src/typings/routes";
import { lazy } from "react";

const AuthRoutes: Route[] = [
  {
    path: "/login",
    component: lazy(() => import("@src/pages/Login")),
    isAuth: true,
  },
];

export default AuthRoutes;
