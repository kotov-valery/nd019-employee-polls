import type { UserList } from "../../backend/Types";
import {
  RECEIVE_USERS,
  USER_ANSWER_QUESTION,
  USER_ADDED_QUESTION,
} from "./types";

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

export type UserAddedQuestionAction = {
  type: string;
  uid: string;
  qid: string;
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

export function userAddedQuestion(
  uid: string,
  qid: string
): UserAddedQuestionAction {
  return {
    type: USER_ADDED_QUESTION,
    uid,
    qid,
  };
}
