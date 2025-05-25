import { SET_LOADING_STATE, SetLoadingStateAction } from "../actions/loading";

export default function loading(
  state = false,
  action: SetLoadingStateAction
): boolean {
  switch (action.type) {
    case SET_LOADING_STATE:
      return action.loading;
    default:
      return state;
  }
}
