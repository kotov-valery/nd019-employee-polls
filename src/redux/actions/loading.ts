export const SET_LOADING_STATE = "SET_LOADING_STATE";

export type SetLoadingStateAction = {
  type: string;
  loading: boolean;
};

export function setLoadingState(loading: boolean): SetLoadingStateAction {
  return {
    type: SET_LOADING_STATE,
    loading,
  };
}
