import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import Poll from "../components/Poll/Poll";
import authedUserReducer from "../redux/reducers/authedUser";
import usersReducer from "../redux/reducers/users";
import questionsReducer from "../redux/reducers/questions";

test("should calculate and display correct percentage for poll options", () => {
  const mockState = {
    authedUser: "mtsamis",
    users: {
      mtsamis: {
        id: "mtsamis",
        name: "Mike Tsamis",
        avatarURL: "/avatars/mtsamis.png",
        answers: { "8xf0y6ziyjabvozdd253nd": "optionOne" },
        questions: ["8xf0y6ziyjabvozdd253nd"],
      },
    },
    questions: {
      "8xf0y6ziyjabvozdd253nd": {
        id: "8xf0y6ziyjabvozdd253nd",
        author: "mtsamis",
        timestamp: 1467166872634,
        optionOne: {
          votes: ["mtsamis"],
          text: "Option One",
        },
        optionTwo: {
          votes: ["johndoe", "janedoe"],
          text: "Option Two",
        },
      },
    },
  };

  const store = configureStore({
    reducer: {
      authedUser: authedUserReducer,
      users: usersReducer,
      questions: questionsReducer,
    },
    preloadedState: mockState,
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/questions/8xf0y6ziyjabvozdd253nd"]}>
        <Routes>
          <Route path="/questions/:id" element={<Poll />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  // Verify percentages are calculated correctly
  expect(screen.getByText(/33%/i)).toBeInTheDocument();
  expect(screen.getByText(/67%/i)).toBeInTheDocument();
});

test("should display 'Poll not found' when the poll ID does not exist", () => {
  const mockState = {
    authedUser: "mtsamis",
    users: {
      mtsamis: {
        id: "mtsamis",
        name: "Mike Tsamis",
        avatarURL: "/avatars/mtsamis.png",
        answers: {},
        questions: [],
      },
    },
    questions: {},
  };

  const store = configureStore({
    reducer: {
      authedUser: authedUserReducer,
      users: usersReducer,
      questions: questionsReducer,
    },
    preloadedState: mockState,
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/questions/nonexistent-id"]}>
        <Routes>
          <Route path="/questions/:id" element={<Poll />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  // Verify 'Poll not found' message is displayed
  expect(screen.getByText(/Poll not found/i)).toBeInTheDocument();
});
