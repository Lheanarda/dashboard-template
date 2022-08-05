import React from "react";

interface ShimmerTableProps {
  totalColumns: number;
  totalRows?: number;
}

const ShimmerTable: React.FC<ShimmerTableProps> = ({
  totalColumns,
  totalRows = 1,
}) => {
  return (
    <>
      {[...Array(totalRows)].map((_, i) => {
        return (
          <tr key={i} role="table-loading">
            {[...Array(totalColumns)].map((__, idx) => {
              return (
                <td
                  key={idx}
                  className="bg-gray-300 dark:bg-gray-200 w-[20%] animate-pulse h-14  mt-3"
                ></td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};
export default ShimmerTable;
