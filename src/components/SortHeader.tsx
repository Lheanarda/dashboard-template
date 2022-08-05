import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { SortOrderType } from "@src/typings/filter";
import React, { useEffect, useState } from "react";

interface SortHeaderProps {
  children: React.ReactNode;
  setSortBy: React.Dispatch<React.SetStateAction<any>>;
  setSortOrder: React.Dispatch<React.SetStateAction<SortOrderType | null>>;
  sortKey: string;
}

const SortHeader: React.FC<SortHeaderProps> = ({
  children,
  setSortBy,
  setSortOrder,
  sortKey,
}) => {
  const [sort, setSort] = useState<SortOrderType | null>(null);

  useEffect(() => {
    setSortOrder(sort);
    setSortBy(sortKey);
  }, [setSortBy, setSortOrder, sort, sortKey]);

  const handleSort = () => {
    if (!sort || sort === "normal") setSort("ascend");
    else if (sort === "ascend") setSort("descend");
    else setSort("normal");
  };

  const RenderSortIcon: React.FC<{ className?: string }> = ({ className }) => {
    if (sort === "ascend") return <ChevronUpIcon className={className} />;
    else if (sort === "descend")
      return <ChevronDownIcon className={className} />;
    return (
      <div className="flex flex-col">
        <ChevronUpIcon className={`${className} -mb-1.5`} />
        <ChevronDownIcon className={className} />
      </div>
    );
  };

  return (
    <th onClick={handleSort} role="table-sort " className="sticky top-0 z-10">
      <div className="flex space-x-2 items-center">
        <span>{children}</span>
        <span>
          <RenderSortIcon className="w-3 h-3 text-white " />
        </span>
      </div>
    </th>
  );
};
export default SortHeader;
