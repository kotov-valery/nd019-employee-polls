import { combineReducers } from "redux";
import authedUser from "./authedUser";

const rootReducer = combineReducers({
  authedUser,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
