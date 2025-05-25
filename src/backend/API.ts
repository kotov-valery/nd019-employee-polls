import { _getUsers, _getQuestions } from "./_DATA";
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
