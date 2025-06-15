import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";
import { UserList, QuestionList, Question } from "./Types";

export function getInitialData(): Promise<{
  users: UserList;
  questions: QuestionList;
}> {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => {
      // Use predefined avatar URLs for users
      Object.keys(users).forEach((user) => {
        users[user].avatarURL = `/avatars/${users[user].id}.png`;
      });
      return {
        users,
        questions,
      };
    }
  );
}

export function saveQuestionVote({
  qid,
  answer,
  authedUser,
}: {
  qid: string;
  answer: string;
  authedUser: string;
}): Promise<void> {
  return _saveQuestionAnswer({
    authedUser,
    qid,
    answer,
  });
}

export function saveNewQuestion({
  optionOneText,
  optionTwoText,
  author,
}: {
  optionOneText: string;
  optionTwoText: string;
  author: string;
}): Promise<Question> {
  return _saveQuestion({
    optionOneText,
    optionTwoText,
    author,
  });
}
