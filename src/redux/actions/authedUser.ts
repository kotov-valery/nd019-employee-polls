import { SET_AUTHED_USER, LOGOUT_USER } from "./types";

export const setAuthedUser = (userId: string) => ({
  type: SET_AUTHED_USER,
  userId,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
