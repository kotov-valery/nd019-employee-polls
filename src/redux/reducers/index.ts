import { combineReducers } from "redux";

import users from "./users";
import questions from "./questions";
import authedUser from "./authedUser";
import loading from "./loading";

const rootReducer = combineReducers({
  authedUser,
  users,
  questions,
  loading,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
