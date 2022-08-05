import React, { useEffect } from "react";
import Container from "@src/layouts/Container";

interface AuthFallbackProps {
  isAnimating: boolean;
  setIsAnimating: (bool: boolean) => void;
}
const AuthFallback: React.FC<AuthFallbackProps> = ({
  isAnimating,
  setIsAnimating,
}) => {
  useEffect(() => {
    setIsAnimating(true);
    return () => {
      setIsAnimating(false);
    };
  }, [isAnimating, setIsAnimating]);

  return (
    <div className="background">
      <div className="lg:rounded-xl  w-full bg-white/70 shadow-sm flex lg:h-[90vh] lg:w-[80%]  min-h-screen lg:min-h-0  dark:bg-slate-900 font-monts"></div>
    </div>
  );
};
export default AuthFallback;
