import type { UserList } from "../../backend/Types";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const USER_ANSWER_QUESTION = "USER_ANSWER_QUESTION";

export type ReceiveUsersAction = {
  type: string;
  users: UserList;
};

export type UserAnswerQuestionAction = {
  type: string;
  uid: string;
  qid: string;
  answer: string;
};

export function receiveUsers(users: UserList): ReceiveUsersAction {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function userAnswerQuestion(
  uid: string,
  qid: string,
  answer: string
): UserAnswerQuestionAction {
  return {
    type: USER_ANSWER_QUESTION,
    uid,
    qid,
    answer,
  };
}
