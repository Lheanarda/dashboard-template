import React from "react";
import Card from "./Card";
import StatisticSingle from "./StatisticSingle";

interface StatisticSingleCardProps {
  Icon: React.ReactNode;
  title: string;
  data: string;
  bgIconColor?: string;
  outline?: boolean;
  className?: string;
  mode?: "col" | "row";
}

const StatisticSingleCard: React.FC<StatisticSingleCardProps> = ({
  Icon,
  data,
  title,
  className,
  bgIconColor = "bg-green-100",
  mode = "row",
  outline = false,
}) => {
  return (
    <Card
      outline={outline}
      className={`${className} ${
        mode === "col" && "flex items-center justify-center flex-col"
      }`}
    >
      <StatisticSingle
        Icon={Icon}
        data={data}
        title={title}
        bgIconColor={bgIconColor}
        mode={mode}
      />
    </Card>
  );
};
export default StatisticSingleCard;
