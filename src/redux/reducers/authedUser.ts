import { LOGOUT_USER, SET_AUTHED_USER } from "../actions/types";

type AuthedUserAction =
  | { type: typeof SET_AUTHED_USER; userId: string }
  | { type: typeof LOGOUT_USER };

const initialState: string | null = null;

const authedUserReducer = (state = initialState, action: AuthedUserAction) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.userId;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default authedUserReducer;
