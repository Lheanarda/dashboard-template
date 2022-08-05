import { Users } from "@src/typings/user/user.d";
import randomUserApi from "@src/apis/randomUserApi";
import {
  RequestUserParameter,
  ResponseUser,
} from "@src/typings/user/user-service.d";

export const fetchUsers = async ({
  gender,
  keyword,
  page,
  pageSize,
  results,
  sortBy,
  sortOrder,
}: RequestUserParameter): Promise<Users> => {
  if (!page) throw new Error("page must not be empty");
  if (!pageSize) throw new Error("page size must not be empty");
  if (!results) throw new Error("results must not be empty");

  let params: RequestUserParameter = { page, pageSize, results };

  if (gender && gender !== "all") params = { ...params, gender };
  if (keyword) params = { ...params, keyword };
  if (sortBy && sortOrder && sortOrder !== "normal")
    params = { ...params, sortOrder, sortBy };

  const res = await randomUserApi.get("", {
    params: params,
  });
  const { error, results: resultResponse }: ResponseUser = res.data;

  if (error) throw new Error(error);
  return resultResponse;
};
