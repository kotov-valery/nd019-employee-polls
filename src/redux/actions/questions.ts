import { saveQuestionVote } from "../../backend/API";
import type { QuestionList } from "../../backend/Types";

export const RECEIVE_QUESTOINS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTION = "VOTE_QUESTION";

export type ReceiveQuestionsAction = {
  type: string;
  questions: QuestionList;
};

export type VoteQestionAction = {
  type: string;
  id: string;
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

export function voteQuestion(id: string, answer: string): VoteQestionAction {
  return {
    type: VOTE_QUESTION,
    id,
    answer,
  };
}

export function handleVoteQuestion(
  id: string,
  answer: string
): (dispatch: any, getState: any) => Promise<void> {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionVote({ id, answer, authedUser }).then(() =>
      dispatch(voteQuestion(id, answer))
    );
  };
}
