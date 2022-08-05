import React from "react";

interface CardProps {
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, outline, className }) => {
  return (
    <div
      className={`
      ${className}
         ${
           outline && " border  border-primary"
         } shadow  bg-white dark:bg-slate-700 w-full p-4
      `}
    >
      {children}
    </div>
  );
};
export default Card;
