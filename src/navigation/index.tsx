import { ChartBarIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Navigations } from "@src/typings/navigation";

const navigations: Navigations = [
  {
    id: "test",
    navLink: "/test",
    Icon: () => <ChartBarIcon className="w-6 h-6" />,
    title: "Dashboard",
  },
  {
    id: "user",
    navLink: "/users",
    Icon: () => <UserCircleIcon className="w-6 h-6" />,
    title: "Users",
  },
];

export default navigations;
