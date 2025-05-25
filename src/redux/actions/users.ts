import type { UserList } from "../../backend/Types";

export const RECEIVE_USERS = "RECEIVE_USERS";

export type ReceiveUsersAction = {
  type: string;
  users: UserList;
};

export function receiveUsers(users: UserList): ReceiveUsersAction {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
