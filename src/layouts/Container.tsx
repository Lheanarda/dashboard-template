import React, { useContext } from "react";
import Menu from "./components/menu";
import Navbar from "./components/Navbar";
import BackgroundMobileMenu from "./components/menu/BackgroundMobileMenu";
import {
  FullscreenContext,
  FullscreenContextType,
} from "@src/lib/contexts/FullscreenContext";

interface ContainerProps {
  children: React.ReactNode;
}

const CONTAINER_CLASS = {
  fullscreen:
    "pb-3 w-full bg-white/70 shadow-sm flex lg:h-[100vh] lg:w-[100%]  min-h-screen lg:min-h-0  dark:bg-slate-900 font-monts",
  center:
    "lg:rounded-3xl pb-5 w-full bg-white/70 shadow-sm flex lg:h-[90vh] lg:w-[90%]  min-h-screen lg:min-h-0  dark:bg-slate-900 font-monts",
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { isFullscreen } = useContext(
    FullscreenContext
  ) as FullscreenContextType;
  return (
    <div className="background" role="container">
      <div
        className={
          isFullscreen ? CONTAINER_CLASS.fullscreen : CONTAINER_CLASS.center
        }
      >
        <BackgroundMobileMenu />
        <Menu />
        <div className="w-full lg:overflow-y-auto lg:scrollbar-custom">
          <Navbar />
          <div className="px-5 mt-5 lg:mt-12 pb-3 lg:px-10  lg:max-h-[70vh]  ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container;
