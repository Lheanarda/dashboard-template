import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { calculateCeilTotalPaginateItem } from "@src/lib/utils/helper";
import React, { useEffect, useState } from "react";

const PAGE_MINUS_ONE_FOR_INDEX = 2;

interface PaginateProps {
  className?: string;
  page: number;
  pageSize: number;
  totalItem: number;
  onChangePage: (page: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({
  className,
  onChangePage,
  page,
  pageSize,
  totalItem,
}) => {
  const [ceilTotalItem, setCeilTotalItem] = useState<number | null>(null);

  useEffect(() => {
    setCeilTotalItem(calculateCeilTotalPaginateItem(totalItem, pageSize));
  }, [totalItem, pageSize]);

  const RenderPageNumbers: React.FC<{ total: number; start?: number }> = ({
    total,
    start = 0,
  }) => {
    return (
      <div>
        {[...Array(total)].map((_, idx) => {
          const pageNumber: number = start + idx + 1;
          return (
            <button
              className={`border border-primary p-2  ${
                page === pageNumber ? "bg-primary text-white" : ""
              }`}
              key={pageNumber}
              role="pagination-page-btn"
              onClick={() => onChangePage(pageNumber)}
            >
              <div className="w-5 h-5 -mt-1">{pageNumber}</div>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`${className} flex space-x-1`}
      data-testid="pagination-container"
    >
      <button
        className={`border border-primary p-1 ${page === 1 && "bg-green-200"}`}
        disabled={page === 1}
        role="pagination-left-btn"
        onClick={() => onChangePage(page - 1)}
      >
        <ArrowLeftIcon className="w-5 h-5 text-primary" />
      </button>
      {ceilTotalItem && ceilTotalItem <= 8 && (
        <RenderPageNumbers total={ceilTotalItem} />
      )}
      {ceilTotalItem && ceilTotalItem > 8 && (
        <>
          <RenderPageNumbers total={2} />
          {page > 3 && <div className="mt-1">...</div>}
          {page > 2 && page <= ceilTotalItem - PAGE_MINUS_ONE_FOR_INDEX && (
            <RenderPageNumbers start={page - 1} total={1} />
          )}
          {page < ceilTotalItem - PAGE_MINUS_ONE_FOR_INDEX && (
            <div className="mt-1">...</div>
          )}
          <RenderPageNumbers
            total={2}
            start={ceilTotalItem - PAGE_MINUS_ONE_FOR_INDEX}
          />
        </>
      )}
      <button
        className={`border border-primary p-1 ${
          page === ceilTotalItem && "bg-green-200"
        }`}
        role="pagination-right-btn"
        disabled={page === ceilTotalItem}
        onClick={() => onChangePage(page + 1)}
      >
        <ArrowRightIcon className="w-5 h-5 text-primary" />
      </button>
    </div>
  );
};
export default Paginate;
