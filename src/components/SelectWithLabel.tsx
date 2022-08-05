import React, { SelectHTMLAttributes } from "react";

type Option = {
  value: string | number;
  label: string;
};

interface SelectWithLabelProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  className?: string;
  options: Option[];
}

const SelectWithLabel: React.FC<SelectWithLabelProps> = ({
  name,
  className,
  options,
  ...props
}) => {
  return (
    <div className={`input-group ${className}`}>
      <label htmlFor={`id-select-${name}`} className="input-label">
        {name}
      </label>
      <select id={`id-select-${name}`} className="custom-input" {...props}>
        {options.map((opt) => {
          return (
            <option key={`id-${name}-${opt.value}`} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SelectWithLabel;
