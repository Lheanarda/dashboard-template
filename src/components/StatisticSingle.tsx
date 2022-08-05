import { replaceLast6DigitNumberWithM } from "@src/lib/utils/helper";
import React from "react";

interface StatisticSingleProps {
  Icon: React.ReactNode;
  title: string;
  data: string;
  mode?: "row" | "col";
  bgIconColor?: string;
  className?: string;
}

const StatisticSingle: React.FC<StatisticSingleProps> = ({
  Icon,
  data,
  title,
  className,
  mode = "row",
  bgIconColor = "bg-green-100",
}) => {
  return (
    <div
      className={`flex ${
        mode === "col"
          ? "flex-col justify-center space-y-2 text-center"
          : "space-x-4 "
      } items-center    ${className}`}
    >
      <div className={`${bgIconColor} rounded-full p-3 `}>{Icon}</div>
      <div className=" flex flex-col ">
        <div className={`${data.length > 9 && "text-sm"} font-bold`}>
          {data.length > 9 ? replaceLast6DigitNumberWithM(data) : data}
        </div>
        <div className="text-xs ">{title}</div>
      </div>
    </div>
  );
};
export default StatisticSingle;
