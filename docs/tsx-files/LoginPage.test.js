import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import LoginPage from "../components/LoginPage";
import authedUserReducer from "../redux/reducers/authedUser";
import usersReducer from "../redux/reducers/users";
import { UserList } from "../backend/Types";

test("LoginPage dropdown selection and button click", () => {
  const userList = {
    mtsamis: {
      id: "mtsamis",
      password: "xyz123",
      name: "Mike Tsamis",
      avatarURL: "",
      answers: {},
      questions: [],
    },
    johndoe: {
      id: "johndoe",
      password: "abc456",
      name: "John Doe",
      avatarURL: "",
      answers: {},
      questions: [],
    },
  } as UserList;

  // Create a mock Redux store
  const store = configureStore({
    reducer: {
      authedUser: authedUserReducer,
      users: usersReducer,
    },
    preloadedState: {
      authedUser: null,
      users: userList,
    },
  });

  const { getByRole } = render(
    <Provider store={store}>
      <LoginPage userList={userList} />
    </Provider>
  );

  const dropdown = getByRole("combobox");
  const loginButton = getByRole("button", { name: /login/i });

  fireEvent.change(dropdown, { target: { value: "mtsamis" } });
  fireEvent.click(loginButton);

  // Assert that the navigate function was called
  expect(screen.getByText(/Select user to log in/i)).toBeInTheDocument();
});
