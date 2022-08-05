import {
  MobileMenuContext,
  MobileMenuContextType,
} from "@src/lib/contexts/MobileMenuContext";
import { useContext } from "react";

const BackgroundMobileMenu = ({}) => {
  const { setIsOpenMenu, isOpenMenu } = useContext(
    MobileMenuContext
  ) as MobileMenuContextType;

  return (
    <>
      {isOpenMenu && (
        <div
          className="fixed w-screen z-20 h-screen left-0 bg-black/20 dark:bg-white/20  lg:hidden cursor-pointer"
          onClick={() => setIsOpenMenu(false)}
        ></div>
      )}
    </>
  );
};
export default BackgroundMobileMenu;
