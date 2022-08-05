import { pad } from "./helper";

export const formatISOStringDate = (ISOStringDate: string) => {
  const arr = ISOStringDate.split("T");
  const time = arr[1].split(".")[0];
  return `${arr[0]} ${time}`;
};

export const convertJSDateTypeToYYYYMMDD = (date: Date) => {
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1, 2);
  const day = pad(date.getDate(), 2);

  return `${year}-${month}-${day}`;
};

export const getCurrentMonth = () => {
  const date = new Date();
  const month = pad(date.getMonth() + 1, 2);
  const year = date.getFullYear();
  return `${year}-${month}`;
};

export const getFirstDateAndLastDateOfSelectedMonth = (
  monthStripYear: string
) => {
  const date = new Date(monthStripYear);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return {
    firstDateString: convertJSDateTypeToYYYYMMDD(firstDay),
    lastDateString: convertJSDateTypeToYYYYMMDD(lastDay),
  };
};

export const getLastMonthString = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const lastMonth = month - 1;

  return `${year}-${pad(lastMonth, 2)}`;
};

export const getCurrentMonthString = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return `${year}-${pad(month, 2)}`;
};
