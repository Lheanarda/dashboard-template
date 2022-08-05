import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";

interface BreadcrumbsProps {
  currentPage: string;
  parent?: string | string[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  parent = "Home",
  currentPage,
}) => {
  return (
    <div className="flex space-x-2 items-center">
      {typeof parent === "string" && (
        <>
          <div className="cursor-pointer">{parent}</div>
          <ChevronRightIcon className="text-slate-800 w-5 h-5 dark:text-slate-200" />
        </>
      )}
      {Array.isArray(parent) &&
        parent.map((name) => {
          return (
            <div className="flex space-x-2" key={name}>
              <div className="cursor-pointer">{name}</div>
              <ChevronRightIcon className="text-slate-800 w-5 h-5 dark:text-slate-200" />
            </div>
          );
        })}
      <div className="font-bold text-primary ">{currentPage}</div>
    </div>
  );
};
export default Breadcrumbs;
