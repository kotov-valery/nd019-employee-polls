import { Middleware } from "redux";

import { logger } from "./logger";

const middleware: Middleware[] = [logger];

export default middleware;
