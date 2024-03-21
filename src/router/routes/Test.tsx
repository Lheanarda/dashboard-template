import { lazyWithRetries } from "@src/lib/utils/core";
import { Route } from "@src/typings/routes";

const TestRoutes: Route[] = [
  {
    path: "/test",
    component: lazyWithRetries(() => import("@src/pages/Test")),
  },
];

export default TestRoutes;
