import { logger } from "./logger";
import { Middleware } from "redux";

const middleware: Middleware[] = [logger];

export default middleware;
