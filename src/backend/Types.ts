export type User = {
  id: string;
  name: string;
};

export type UserList = {
  [key: string]: User;
};
