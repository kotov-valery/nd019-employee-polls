export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const setAuthedUser = (userId: string) => ({
  type: SET_AUTHED_USER,
  userId,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
