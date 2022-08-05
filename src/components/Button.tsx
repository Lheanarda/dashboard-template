import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`btn ${className} ${props.disabled && "!bg-gray-300"}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
