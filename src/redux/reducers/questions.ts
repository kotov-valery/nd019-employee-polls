import type { QuestionList } from "../../backend/Types";
import type { ReceiveQuestionsAction } from "../actions/questions";
import { RECEIVE_QUESTOINS } from "../actions/questions";

export default function questions(
  state = {},
  action: ReceiveQuestionsAction
): QuestionList {
  switch (action.type) {
    case RECEIVE_QUESTOINS: {
      const { questions } = action as ReceiveQuestionsAction;
      return {
        ...state,
        ...questions,
      };
    }
    default:
      return state;
  }
}
