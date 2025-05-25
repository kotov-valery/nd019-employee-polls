import type { UserList } from "../../backend/Types";
import { RECEIVE_USERS, ReceiveUsersAction } from "../actions/users";

export default function users(
  state = {},
  action: ReceiveUsersAction
): UserList {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
