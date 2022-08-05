import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "@src/typings/navigation";
import {
  MobileMenuContext,
  MobileMenuContextType,
} from "@src/lib/contexts/MobileMenuContext";

type MenuItemsProps = Navigation;

const MenuItems: React.FC<MenuItemsProps> = ({ Icon, id, navLink, title }) => {
  const { setIsOpenMenu } = useContext(
    MobileMenuContext
  ) as MobileMenuContextType;
  return (
    <NavLink
      key={id}
      to={navLink}
      onClick={() => setIsOpenMenu(false)}
      className={(navData) =>
        navData.isActive
          ? "text-white bg-primary shadow-md shadow-green-300 dark:shadow-slate-700 w-full flex items-center  space-x-5 rounded-md p-2"
          : "text-primary w-full flex items-center  space-x-5 rounded-md p-2"
      }
    >
      <Icon /> <span>{title}</span>
    </NavLink>
  );
};
export default MenuItems;
