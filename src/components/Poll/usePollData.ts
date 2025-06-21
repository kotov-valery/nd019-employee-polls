import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export function usePollData(id: string | undefined) {
  const questions = useSelector((state: RootState) => state.questions);
  const users = useSelector((state: RootState) => state.users);
  const authedUser = useSelector((state: RootState) => state.authedUser);

  const poll = id && questions ? questions[id] : null;
  const currentUser = authedUser ? users[authedUser] : null;
  const unanswered =
    id && currentUser ? currentUser.answers[id] === undefined : false;

  const totalAnswers = poll
    ? poll.optionOne.votes.length + poll.optionTwo.votes.length
    : 0;
  const optionOneVotes = poll ? poll.optionOne.votes.length : 0;
  const optionTwoVotes = poll ? poll.optionTwo.votes.length : 0;

  const pollAuthor = poll ? users[poll.author] : null;
  const pollAuthorAvatar = pollAuthor ? pollAuthor.avatarURL : "";

  return {
    poll,
    currentUser,
    unanswered,
    totalAnswers,
    optionOneVotes,
    optionTwoVotes,
    pollAuthorAvatar,
  };
}
