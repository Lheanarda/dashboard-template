import { InformationCircleIcon } from "@heroicons/react/outline";
import { Column } from "@src/components/DataTable";
import Tooltip from "@src/components/Tooltip";
import { numberWithCommas } from "@src/lib/utils/helper";
import { FC, useContext } from "react";

const columns: Column[] = [
  {
    id: "no",
    header: <Tooltip message="Nomor">No</Tooltip>,
    cell: (_: any, idx: number) => <div>{idx + 1}</div>,
  },
  {
    id: "partnertype",
    header: <Tooltip message="Tipe Partner">Tipe Partner</Tooltip>,
    cell: (row: any) => <div>{row.partnertype}</div>,
  },
  {
    id: "kodesubdist",
    header: <Tooltip message="Kode Subdist">Kode Subdist</Tooltip>,
    cell: (row: any) => <div>{row.kodesubdist}</div>,
  },
  {
    id: "subdist",
    header: <Tooltip message="Subdist">Subdist</Tooltip>,
    cell: (row: any) => <div>{row.subdist}</div>,
  },
  {
    id: "sku",
    header: <Tooltip message="SKU">SKU</Tooltip>,
    cell: (row: any) => (
      <div className="text-right">{numberWithCommas(row.sku)}</div>
    ),
  },
  {
    id: "dpb",
    header: <Tooltip message="DPB">DPB</Tooltip>,
    sortKey: "dpb",
    isSortable: true,
    cell: (row: any) => (
      <div className="text-right">{numberWithCommas(row.dpb)}</div>
    ),
  },
  {
    id: "po",
    header: <Tooltip message="PO">PO</Tooltip>,
    sortKey: "po",
    isSortable: true,
    cell: (row: any) => (
      <div className="text-right">{numberWithCommas(row.po)}</div>
    ),
  },
  {
    id: "faktur",
    header: <Tooltip message="Faktur">Faktur</Tooltip>,
    sortKey: "faktur",
    isSortable: true,
    cell: (row: any) => (
      <div className="text-right">{numberWithCommas(row.faktur)}</div>
    ),
  },
  {
    id: "skusell",
    header: <Tooltip message="SKU Sell">SKU Sell</Tooltip>,
    cell: (row: any) => (
      <div className="text-right">{numberWithCommas(row.skusell)}</div>
    ),
  },
  {
    id: "userinactive",
    header: <Tooltip message="User Belum Aktif">User Belum Aktif</Tooltip>,
    sortKey: "non_active_user",
    isSortable: true,
    cell: (row: any) => <></>,
  },
  {
    id: "userbelum",
    header: (
      <Tooltip message="User Belum Transaksi">User Belum Transaksi</Tooltip>
    ),
    isSortable: true,
    sortKey: "blmorder",
    cell: (row: any) => <></>,
  },
  {
    id: "actualao",
    header: <Tooltip message="Actual AO MTD">Actual AO MTD</Tooltip>,
    isSortable: true,
    sortKey: "ao",
    cell: (row: any) => (
      <div className="text-right">{numberWithCommas(row.ao)}</div>
    ),
  },
  {
    id: "targetao",
    header: <Tooltip message="Target AO MTD">Target AO MTD</Tooltip>,
    isSortable: true,
    sortKey: "targetAO",
    cell: (row: any) => (
      <div className="text-right">{numberWithCommas(row.targetAO)}</div>
    ),
  },
  {
    id: "achvaolm",
    header: <Tooltip message="Growth AO MTD Last Month">Growth AO LM.</Tooltip>,
    isSortable: true,
    sortKey: "comparedAchAoLM",
    cell: (row: any) => (
      <div className="text-right">{row.comparedAchAoLM?.toFixed(2)}%</div>
    ),
  },
  {
    id: "achAo",
    header: <Tooltip message="Achievement AO MTD">Ach. AO MTD</Tooltip>,
    isSortable: true,
    sortKey: "achAo",
    cell: (row: any) => (
      <div className="text-right">{row.achAo?.toFixed(2)}%</div>
    ),
  },
  {
    id: "actualsales",
    header: <Tooltip message="Actual Sales MTD">Actual Sales MTD</Tooltip>,
    sortKey: "sales",
    isSortable: true,
    cell: (row: any) => (
      <div className="text-right">{numberWithCommas(row.sales)}</div>
    ),
  },
  {
    id: "targetsales",
    header: <Tooltip message="Target Sales MTD">Target Sales MTD</Tooltip>,
    sortKey: "targetsales",
    isSortable: true,
    cell: (row: any) => (
      <div className="text-right">{numberWithCommas(row.targetsales)}</div>
    ),
  },
  {
    id: "achvsaleslm",
    header: (
      <Tooltip message="Growth Sales MTD Last Month">Growth Sales LM.</Tooltip>
    ),
    isSortable: true,
    sortKey: "comparedAchSalesLM",
    cell: (row: any) => (
      <div className="text-right">{row.comparedAchSalesLM?.toFixed(2)}%</div>
    ),
  },
  {
    id: "achvsales",
    header: <Tooltip message="Achievement Sales MTD">Ach. Sales MTD</Tooltip>,
    sortKey: "achSales",
    isSortable: true,
    cell: (row: any) => (
      <div className="text-right">{row.achSales?.toFixed(2)}%</div>
    ),
  },
];

export default columns;
