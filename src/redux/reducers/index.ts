import { combineReducers } from "redux";
import authedUser from "./authedUser";

const rootReducer = combineReducers({
  authedUser,
});

export default rootReducer;
