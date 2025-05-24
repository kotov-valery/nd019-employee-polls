import { SET_AUTHED_USER } from "../actions/authedUser";

const initialState = null;

const authedUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.userId;
    default:
      return state;
  }
};

export default authedUserReducer;
