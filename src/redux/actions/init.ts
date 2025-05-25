import type { AppDispatch } from "../store";
import type { UserList, QuestionList } from "../../backend/Types";

import { getInitialData } from "../../backend/API";
import { receiveUsers } from "./users";
import { setLoadingState } from "./loading";
import { receiveQuestions } from "./questions";

export function handleInitialData() {
  return (dispatch: AppDispatch) => {
    console.log("Loading initial data...");
    dispatch(setLoadingState(true));
    return getInitialData().then(
      ({ users, questions }: { users: UserList; questions: QuestionList }) => {
        console.log("Initial data loaded:", { users, questions });
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setLoadingState(false));
      }
    );
  };
}
