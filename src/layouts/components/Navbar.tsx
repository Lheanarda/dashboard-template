import ToggleScreen from "@src/components/ToggleScreen";
import ToggleTheme from "@src/components/ToggleTheme";
import { SM_BREAKPOINT } from "@src/lib/constants/constant";
import { useAppDispatch, useAppSelector } from "@src/lib/hooks/useRedux";
import useTheme from "@src/lib/hooks/useTheme";
import useWindowDimensions from "@src/lib/hooks/useWindowDimension";
import {
  getCurrentMonthString,
  getLastMonthString,
} from "@src/lib/utils/formatDate";
import React, { useState } from "react";
import ToggleMenu from "./ToggleMenu";
import { ArrowCircleLeftIcon, UserCircleIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = ({}) => {
  const appTheme = useTheme();
  const { width } = useWindowDimensions();

  const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="pt-8 flex justify-between px-5 w-full lg:pt-14 lg:px-10">
      <div className="flex items-center">
        <ToggleMenu />
        <ToggleTheme />
        {width > SM_BREAKPOINT && <ToggleScreen />}
      </div>
      <div
        className={`relative flex items-center cursor-pointer ${appTheme.text}`}
        onClick={() => setOpenProfileMenu(!openProfileMenu)}
      >
        <UserCircleIcon className={` w-7 h-7 mr-2`} />
        <div>Alexander</div>
        {openProfileMenu && (
          <div className="absolute top-[120%] right-0 w-[150%]  mx-auto p-1.5 bg-white dark:bg-slate-700 rounded shadow">
            <div
              className="flex space-x-2 items-center hover:bg-green-100 p-2 rounded cursor-pointer"
              onClick={() => navigate("/login")}
            >
              <ArrowCircleLeftIcon className=" w-6 h-6" />
              <div>Logout</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
