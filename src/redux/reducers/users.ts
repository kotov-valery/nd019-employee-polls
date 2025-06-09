import type { User, UserList } from "../../backend/Types";
import {
  RECEIVE_USERS,
  USER_ANSWER_QUESTION,
  ReceiveUsersAction,
  UserAnswerQuestionAction,
} from "../actions/users";

export default function users(
  state: UserList = {},
  action: ReceiveUsersAction | UserAnswerQuestionAction
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
    default:
      return state;
  }
}
