export type User = {
  id: string;
  name: string;
};

export type UserList = {
  [key: string]: User;
};

export type QuestionOption = {
  votes: string[];
  text: string;
};

export type Question = {
  id: string;
  author: string;
  timestamp: number;
  optionOne: QuestionOption;
  optionTwo: QuestionOption;
};

export type QuestionList = {
  [key: string]: Question;
};
