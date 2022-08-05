import { fetchUsers } from "../../service/user-service";
import { Users } from "@src/typings/user/user.d";
import { RootState } from "../../../../store/index";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import { RequestUserParameter } from "@src/typings/user/user-service";

export const { setErrorUsers, setLoadingUsers, setUsers } = userSlice.actions;

export const handleFetchUsers =
  ({
    gender,
    keyword,
    page,
    pageSize,
    results,
    sortBy,
    sortOrder,
  }: RequestUserParameter): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      dispatch(setLoadingUsers(true));
      dispatch(setErrorUsers(null));
      const users: Users = await fetchUsers({
        gender,
        keyword,
        page,
        pageSize,
        results,
        sortBy,
        sortOrder,
      });
      dispatch(setUsers(users));
    } catch (err: any) {
      dispatch(setErrorUsers(err.message));
    } finally {
      dispatch(setLoadingUsers(false));
    }
  };
