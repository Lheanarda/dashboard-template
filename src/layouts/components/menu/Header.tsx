import { LogoEmos, IconEmos } from "@src/lib/constants/imgSrc";
import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  t?: boolean;
}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Link to="/" className="flex items-center">
      <img src={IconEmos} alt="Emos" className="w-[25%] " />
      <img src={LogoEmos} alt="Emos" className="w-[80%] -ml-2 -mb-3" />
    </Link>
  );
};
export default Header;
