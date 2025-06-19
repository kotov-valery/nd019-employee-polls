import { LOGOUT_USER, SET_AUTHED_USER } from "../actions/types";

const initialState = null;

const authedUserReducer = (state = initialState, action: any) => {
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
