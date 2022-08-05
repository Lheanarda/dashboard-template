import React, { useEffect, useState } from "react";
import { Navigation } from "@src/typings/navigation";
import MenuItems from "./MenuItems";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";

const GroupMenuItems: React.FC<Navigation> = ({
  title,
  Icon,
  children,
  id,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const foundRoute = children?.find((child) => child.navLink === pathname);
    if (foundRoute) setActive(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <>
      <div
        id={id}
        className={`text-primary w-full flex items-center rounded-md p-2 cursor-pointer justify-between ${
          active && "bg-green-200 dark:bg-slate-800"
        }`}
        onClick={() => setActive(!active)}
      >
        <div className="flex space-x-5">
          <Icon /> <span>{title}</span>
        </div>
        {active ? (
          <ChevronDownIcon className="text-primary h-5 w-5 ml-auto" />
        ) : (
          <ChevronRightIcon className="text-primary h-5 w-5 ml-auto" />
        )}
      </div>
      <div className={`pl-5 space-y-2 ${active ? "block" : "hidden"}`}>
        {children?.map((child) => {
          if (child.children && child.children.length) {
            return (
              <GroupMenuItems
                Icon={child.Icon}
                id={child.id}
                navLink={child.navLink}
                title={child.title}
                children={child.children}
                key={child.id}
              />
            );
          }
          return (
            <div key={child.id}>
              <MenuItems
                Icon={child.Icon}
                key={child.id}
                title={child.title}
                navLink={child.navLink}
                id={child.id}
              ></MenuItems>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GroupMenuItems;
