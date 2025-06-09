import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";
import { UserList, QuestionList } from "./Types";

export function getInitialData(): Promise<{
  users: UserList;
  questions: QuestionList;
}> {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestionVote({
  id,
  answer,
  authedUser,
}: {
  id: string;
  answer: string;
  authedUser: string;
}): Promise<void> {
  return _saveQuestionAnswer({
    authedUser,
    qid: id,
    answer,
  });
}
