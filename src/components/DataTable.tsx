import { SortOrderType } from "@src/typings/filter";
import React, { Dispatch, TableHTMLAttributes } from "react";
import ShimmerTable from "./ShimmerTable";
import SortHeader from "./SortHeader";

export interface Column {
  id: string;
  header: React.ReactNode;
  cell: (row: any, idx: number) => React.ReactNode;
  isSortable?: boolean;
  sortKey?: string;
}

interface DataTableProps extends TableHTMLAttributes<HTMLTableElement> {
  columns: Column[];
  dataRender: Array<any>;
  rowKey?: (row: any) => string;
  loadingData?: boolean;
  errorData?: string | null;
  className?: string;
  handlingError?: React.ReactNode;
  setSortBy?: React.Dispatch<React.SetStateAction<any>>;
  setSortOrder?: Dispatch<React.SetStateAction<SortOrderType | null>>;
}

const DataTable: React.FC<DataTableProps> = ({
  className,
  columns,
  setSortBy,
  setSortOrder,
  loadingData = false,
  dataRender,
  handlingError,
  rowKey,
  errorData = null,
  ...props
}) => {
  return (
    <>
      <table className={`text-sm relative ${className}`} {...props}>
        <thead className="w-full">
          <tr>
            {columns.map((col) => {
              return setSortBy &&
                setSortOrder &&
                col.isSortable &&
                col.sortKey ? (
                <SortHeader
                  key={col.id}
                  setSortBy={setSortBy}
                  setSortOrder={setSortOrder}
                  sortKey={col.sortKey}
                >
                  {col.header}
                </SortHeader>
              ) : (
                <th
                  key={`table-header-${col.id}`}
                  role={`table-header-${col.id}`}
                  className="sticky top-0 z-10"
                >
                  {col.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {!loadingData && dataRender && !errorData && (
            <>
              {dataRender.map((data, idx) => {
                return (
                  <tr data-testid="table-row" key={rowKey ? rowKey(data) : idx}>
                    {columns.map((col, idx2) => {
                      return (
                        <td key={`table-col-${col.id}-${idx2}`}>
                          {col.cell(data, idx)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </>
          )}
          {loadingData && (
            <ShimmerTable totalColumns={columns.length} totalRows={5} />
          )}
        </tbody>
      </table>
      {errorData && !loadingData && (
        <div className="text-primary mt-2" role="table-error">
          <div>{errorData}</div>
          <div>{handlingError}</div>
        </div>
      )}
    </>
  );
};
export default DataTable;
