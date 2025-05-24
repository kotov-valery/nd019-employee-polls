import { AnyAction, Middleware } from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk";

import { logger } from "./logger";
import { RootState } from "../reducers";

const middleware: Middleware[] = [
  thunk as ThunkMiddleware<RootState, AnyAction>,
  logger,
];

export default middleware;
