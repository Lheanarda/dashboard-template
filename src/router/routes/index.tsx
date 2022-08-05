import { Route } from "@src/typings/routes";
import AuthRoutes from "./Auth";
import TestRoutes from "./Test";
import UserRoutes from "./User";

export const MainPageRoute = "/test";

const Routes: Route[] = [...AuthRoutes, ...UserRoutes, ...TestRoutes];

export default Routes;
