import { saveQuestionVote } from "../../backend/API";
import type { QuestionList } from "../../backend/Types";
import { userAnswerQuestion } from "./users";

export const RECEIVE_QUESTOINS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTION = "VOTE_QUESTION";

export type ReceiveQuestionsAction = {
  type: string;
  questions: QuestionList;
};

export type VoteQestionAction = {
  type: string;
  uid: string;
  qid: string;
  answer: string;
};

export function receiveQuestions(
  questions: QuestionList
): ReceiveQuestionsAction {
  return {
    type: RECEIVE_QUESTOINS,
    questions,
  };
}

export function voteQuestion(
  uid: string,
  qid: string,
  answer: string
): VoteQestionAction {
  return {
    type: VOTE_QUESTION,
    uid,
    qid,
    answer,
  };
}

export function handleVoteQuestion(
  uid: string,
  qid: string,
  answer: string
): (dispatch: any, getState: any) => Promise<void> {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionVote({ qid, answer, authedUser }).then(() => {
      dispatch(voteQuestion(uid, qid, answer));
      dispatch(userAnswerQuestion(uid, qid, answer));
    });
  };
}
