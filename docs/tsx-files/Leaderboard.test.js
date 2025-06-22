import { render, screen } from "@testing-library/react";
import Leaderboard from "../components/Leaderboard/Leaderboard";

test("Leaderboard snapshot", () => {
  const users = {
    mtsamis: {
      id: "mtsamis",
      name: "Mike Tsamis",
      avatarURL: "/avatars/mtsamis.png",
      answers: { q1: "optionOne", q2: "optionTwo" },
      questions: ["q1", "q2"],
    },
    johndoe: {
      id: "johndoe",
      name: "John Doe",
      avatarURL: "/avatars/johndoe.png",
      answers: { q3: "optionOne" },
      questions: ["q3"],
    },
  };

  const { asFragment } = render(<Leaderboard userList={users} />);
  expect(asFragment()).toMatchSnapshot();
});

test("should display correct table headers", () => {
  const users = {
    mtsamis: {
      id: "mtsamis",
      name: "Mike Tsamis",
      avatarURL: "/avatars/mtsamis.png",
      answers: { q1: "optionOne", q2: "optionTwo" },
      questions: ["q1", "q2"],
    },
  };

  render(<Leaderboard userList={users} />);

  expect(screen.getByText(/Rank/i)).toBeInTheDocument();
  expect(screen.getByText(/User/i)).toBeInTheDocument();
  expect(screen.getByText(/Answers/i)).toBeInTheDocument();
  expect(screen.getByText(/Questions/i)).toBeInTheDocument();
});

test("should sort users by score", () => {
  const users = {
    johndoe: {
      id: "johndoe",
      name: "John Doe",
      avatarURL: "/avatars/johndoe.png",
      answers: { q1: "optionOne" },
      questions: ["q2"],
    },
    mtsamis: {
      id: "mtsamis",
      name: "Mike Tsamis",
      avatarURL: "/avatars/mtsamis.png",
      answers: { q1: "optionOne", q2: "optionTwo" },
      questions: ["q1", "q2"],
    },
  };

  render(<Leaderboard userList={users} />);

  const rows = screen.getAllByRole("row");
  expect(rows[1]).toHaveTextContent("Mike Tsamis"); // First row (highest score)
  expect(rows[2]).toHaveTextContent("John Doe"); // Second row (lower score)
});

test("should display correct user data on leaderboard", () => {
  const users = {
    mtsamis: {
      id: "mtsamis",
      name: "Mike Tsamis",
      avatarURL: "/avatars/mtsamis.png",
      answers: { q1: "optionOne", q2: "optionTwo" },
      questions: ["q1", "q2"],
    },
  };

  render(<Leaderboard userList={users} />);

  const rows = screen.getAllByRole("row");
  expect(rows[1]).toHaveTextContent("Mike Tsamis"); // First row (highest score)
  expect(rows[1]).toHaveTextContent("2"); // Answers count
  expect(rows[1]).toHaveTextContent("2"); // Questions count
});
