import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface RedirectProps {
  children: React.ReactNode;
  mainRoute: string;
}

const Redirect: React.FC<RedirectProps> = ({ children, mainRoute }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate(mainRoute);
  }, [location, navigate, mainRoute]);
  return <>{children}</>;
};
export default Redirect;
