import { ReactNode } from "react";

interface TooltipProps {
  message: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children, message }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute top-[100%] hidden flex-col items-center  mb-6 group-hover:flex">
        <div className="w-3 h-3 -mb-2 rotate-45 bg-gray-600"></div>
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
          {message}
        </span>
      </div>
    </div>
  );
};
export default Tooltip;
