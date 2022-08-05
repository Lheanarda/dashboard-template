import {
  MobileMenuContext,
  MobileMenuContextType,
} from "@src/lib/contexts/MobileMenuContext";
import navigations from "@src/navigation";
import React, { useContext } from "react";
import Header from "./Header";
import MenuItems from "./MenuItems";
import {
  FullscreenContext,
  FullscreenContextType,
} from "@src/lib/contexts/FullscreenContext";
import GroupMenuItems from "./GroupMenuItems";

const Menu: React.FC = () => {
  const { isOpenMenu } = useContext(MobileMenuContext) as MobileMenuContextType;
  const { isFullscreen } = useContext(
    FullscreenContext
  ) as FullscreenContextType;
  return (
    <div
      className={`h-screen fixed bg-white dark:bg-slate-900  w-[15rem]  pt-10  flex-col items-center px-6  z-30 rounded-none shadow-xl lg:relative lg:w-[20rem] lg:h-full lg:bg-transparent lg:block  lg:rounded-3xl  overflow-y-auto scrollbar-custom lg:shadow-none   pb-3  ${
        isOpenMenu ? "block" : "hidden"
      }`}
    >
      <Header />
      <div
        className={`mt-12 w-full flex flex-col space-y-4  max-h-[75vh]  ${
          isFullscreen ? "lg:max-h-[100vh]" : "lg:max-h-[65vh]"
        }`}
      >
        {navigations &&
          navigations.map(({ navLink, Icon, id, title, children }) => {
            if (children && children.length) {
              return (
                <GroupMenuItems
                  title={title}
                  Icon={Icon}
                  key={id}
                  id={id}
                  navLink={navLink}
                  children={children}
                />
              );
            }
            return (
              <MenuItems
                Icon={Icon}
                key={id}
                title={title}
                navLink={navLink}
                id={id}
              ></MenuItems>
            );
          })}
      </div>
    </div>
  );
};
export default Menu;
