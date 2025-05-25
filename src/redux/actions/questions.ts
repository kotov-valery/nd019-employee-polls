import type { QuestionList } from "../../backend/Types";

export const RECEIVE_QUESTOINS = "RECEIVE_QUESTIONS";

export type ReceiveQuestionsAction = {
  type: string;
  questions: QuestionList;
};

export function receiveQuestions(
  questions: QuestionList
): ReceiveQuestionsAction {
  return {
    type: RECEIVE_QUESTOINS,
    questions,
  };
}
