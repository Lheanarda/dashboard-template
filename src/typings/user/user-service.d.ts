import { SortOrderType } from "./../filter.d";
import { Users } from "@src/typings/src/model/user.d";
import { Gender } from "./user";

export type UserSortOptions =
  | "username"
  | "name"
  | "email"
  | "gender"
  | "registeredDate";

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}
export interface ResponseUser {
  results: Users;
  info: Info;
  error?: string;
}

export interface RequestUserParameter {
  page: number;
  pageSize: number;
  results: number;
  gender?: Gender;
  keyword?: string;
  sortBy?: UserSortOptions | null | undefined;
  sortOrder?: SortOrderType | null;
}
