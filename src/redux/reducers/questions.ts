import type { QuestionList } from "../../backend/Types";
import type {
  ReceiveQuestionsAction,
  VoteQestionAction,
  AddNewQuestionAction,
} from "../actions/questions";
import {
  ADD_NEW_QUESTION,
  RECEIVE_QUESTOINS,
  VOTE_QUESTION,
} from "../actions/questions";

export default function questions(
  state: QuestionList = {},
  action: ReceiveQuestionsAction | VoteQestionAction | AddNewQuestionAction
): QuestionList {
  switch (action.type) {
    case RECEIVE_QUESTOINS: {
      const { questions } = action as ReceiveQuestionsAction;
      return {
        ...state,
        ...questions,
      };
    }
    case VOTE_QUESTION: {
      const { uid, qid, answer } = action as VoteQestionAction;
      const question = state[qid as keyof QuestionList];
      return {
        ...state,
        [qid]: {
          ...question,
          optionOne: {
            ...question.optionOne,
            votes:
              answer === "optionOne"
                ? question.optionOne.votes.concat([uid])
                : question.optionOne.votes,
          },
          optionTwo: {
            ...question.optionTwo,
            votes:
              answer === "optionTwo"
                ? question.optionTwo.votes
                : question.optionTwo.votes.concat([uid]),
          },
        },
      };
    }
    case ADD_NEW_QUESTION: {
      const { question } = action as AddNewQuestionAction;
      return {
        ...state,
        [question.id]: {
          ...question,
        },
      };
    }
    default:
      return state;
  }
}
