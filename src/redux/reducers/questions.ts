import type { QuestionList } from "../../backend/Types";
import type {
  ReceiveQuestionsAction,
  VoteQestionAction,
} from "../actions/questions";
import { RECEIVE_QUESTOINS, VOTE_QUESTION } from "../actions/questions";

export default function questions(
  state: QuestionList = {},
  action: ReceiveQuestionsAction | VoteQestionAction
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
      const { id, answer } = action as VoteQestionAction;
      const question = state[id as keyof QuestionList];
      return {
        ...state,
        [id]: {
          ...question,
          optionOne: {
            ...question.optionOne,
            votes:
              answer === "optionOne"
                ? question.optionOne.votes.concat([id])
                : question.optionOne.votes,
          },
          optionTwo: {
            ...question.optionTwo,
            votes:
              answer === "optionTwo"
                ? question.optionTwo.votes
                : question.optionTwo.votes.concat([id]),
          },
        },
      };
    }
    default:
      return state;
  }
}

/*
    case TOGGLE_TWEET: {
      const { id, authedUser, hasLiked } = action as ToggleTweetAction;
      const rootState = state as RootState;
      return {
        ...state,
        [id]: {
          ...rootState[id],
          likes:
            hasLiked === true
              ? rootState[id].likes.filter((uid: string) => uid !== authedUser)
              : rootState[id].likes.concat([authedUser]),
        },
      };
*/
