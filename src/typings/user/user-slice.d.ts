import { Users } from "@src/typings/src/model/user.d";

export interface UserSlice {
  users: Users | null;
  loadingUsers: boolean;
  errorUsers: string | null;
}
