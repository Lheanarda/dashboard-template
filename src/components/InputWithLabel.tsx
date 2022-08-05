import React, { InputHTMLAttributes } from "react";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  SuffixElement?: React.ReactNode;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  name,
  SuffixElement,
  className,
  ...props
}) => {
  return (
    <div className={`input-group  ${className}`}>
      <label htmlFor={`id-${name}`} className="input-label">
        {name}
      </label>
      <div className="flex space-x-2 items-center">
        <input
          id={`id-${name}`}
          type="text"
          className="custom-input"
          {...props}
        />
        {SuffixElement && (
          <button className="bg-primary  items-center justify-center w-9 h-9 border border-primary hidden lg:flex">
            {SuffixElement}
          </button>
        )}
      </div>
    </div>
  );
};
export default InputWithLabel;
