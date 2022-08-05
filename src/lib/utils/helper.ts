export const calculateCeilTotalPaginateItem = (
  totalItem: number,
  pageSize: number
) => {
  return Math.ceil(totalItem / pageSize);
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const numberWithCommas = (x: number | string) => {
  if (typeof x === "string") return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const replaceLast3DigitNumberWithK = (x: string) => {
  const arr = x.split(".")[0].split(",");
  arr.pop();
  return arr.join(",") + "K";
};

export const replaceLast6DigitNumberWithM = (x: string) => {
  const arr = x.split(".")[0].split(",");
  arr.pop();
  arr.pop();
  return arr.join(",") + "M";
};

export const pad = (num: number | string, size: number) => {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
};

export const getPastDaysDate = (day: number) => {
  const now = new Date();
  return new Date(now.setDate(now.getDate() - day));
};
