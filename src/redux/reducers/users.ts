import type { UserList } from "../../backend/Types";
import {
  RECEIVE_USERS,
  USER_ANSWER_QUESTION,
  USER_ADDED_QUESTION,
} from "../actions/types";
import {
  ReceiveUsersAction,
  UserAnswerQuestionAction,
  UserAddedQuestionAction,
} from "../actions/users";

export default function users(
  state: UserList = {},
  action:
    | ReceiveUsersAction
    | UserAnswerQuestionAction
    | UserAddedQuestionAction
): UserList {
  switch (action.type) {
    case RECEIVE_USERS: {
      const { users } = action as ReceiveUsersAction;
      return {
        ...state,
        ...users,
      };
    }
    case USER_ANSWER_QUESTION: {
      const { uid, qid, answer } = action as UserAnswerQuestionAction;
      const answers = state[uid]?.answers || {};
      return {
        ...state,
        [uid]: {
          ...state[uid],
          answers: {
            ...answers,
            [qid]: answer,
          },
        },
      };
    }
    case USER_ADDED_QUESTION: {
      const { uid, qid } = action as UserAnswerQuestionAction;
      return {
        ...state,
        [uid]: {
          ...state[uid],
          questions: state[uid].questions.concat([qid]),
        },
      };
    }
    default:
      return state;
  }
}
