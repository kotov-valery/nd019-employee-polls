import { saveNewQuestion, saveQuestionVote } from "../../backend/API";
import type { Question, QuestionList } from "../../backend/Types";
import { userAddedQuestion, userAnswerQuestion } from "./users";

export const RECEIVE_QUESTOINS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTION = "VOTE_QUESTION";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";

export type ReceiveQuestionsAction = {
  type: string;
  questions: QuestionList;
};

export type VoteQuestionAction = {
  type: string;
  uid: string;
  qid: string;
  answer: string;
};

export type AddNewQuestionAction = {
  type: string;
  question: Question;
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
): VoteQuestionAction {
  return {
    type: VOTE_QUESTION,
    uid,
    qid,
    answer,
  };
}

export function addNewQuestion(question: Question): AddNewQuestionAction {
  return {
    type: ADD_NEW_QUESTION,
    question,
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

export function handleNewQuestion(
  optionOneText: string,
  optionTwoText: string
): (dispatch: any, getState: any) => Promise<void> {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveNewQuestion({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: authedUser,
    }).then((question: Question) => {
      dispatch(addNewQuestion(question));
      dispatch(userAddedQuestion(authedUser, question.id));
    });
  };
}
