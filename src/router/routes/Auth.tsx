import { lazyWithRetries } from "@src/lib/utils/core";
import { Route } from "@src/typings/routes";

const AuthRoutes: Route[] = [
  {
    path: "/login",
    component: lazyWithRetries(() => import("@src/pages/Login")),
    isAuth: true,
  },
];

export default AuthRoutes;
