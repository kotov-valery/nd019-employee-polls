import { render } from "@testing-library/react";
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
