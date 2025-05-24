export const SET_AUTHED_USER = "SET_AUTHED_USER";

export const setAuthedUser = (userId: string) => ({
  type: SET_AUTHED_USER,
  userId,
});
