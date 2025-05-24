import { Middleware } from "redux";

export const logger: Middleware<{}, any> =
  (storeApi: any) => (next: any) => (action: any) => {
    console.group(action.type);
    console.log("The action: ", action);
    const returnValue = next(action);
    console.log("The new state: ", storeApi.getState());
    console.groupEnd();
    return returnValue;
  };
