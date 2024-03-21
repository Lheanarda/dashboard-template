import { lazyWithRetries } from "@src/lib/utils/core";
import { Route } from "@src/typings/routes";

const UserRoutes: Route[] = [
  {
    path: "/users",
    component: lazyWithRetries(() => import("@src/pages/User")),
  },
];

export default UserRoutes;
