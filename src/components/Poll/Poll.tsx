import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { handleVoteQuestion } from "../../redux/actions/questions";
import UnansweredPoll from "./UnansweredPoll";
import CompletedPoll from "./CompletedPoll";

function Poll() {
  const OPTION_ONE = 1;

  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams<{ id: string }>();

  const questions = useSelector((state: RootState) => state.questions);
  const poll = id && questions ? questions[id] : null;

  const users = useSelector((state: RootState) => state.users);
  const authedUser = useSelector((state: RootState) => state.authedUser);

  const currentUser = users[authedUser];
  const unanswered = id ? currentUser.answers[id] === undefined : false;

  const totalAnswers = poll
    ? poll.optionOne.votes.length + poll.optionTwo.votes.length
    : 0;
  const optionOneVotes = poll ? poll.optionOne.votes.length : 0;
  const optionTwoVotes = poll ? poll.optionTwo.votes.length : 0;

  const pollAuthor = poll ? users[poll.author] : null;
  const pollAuthorAvatar = pollAuthor ? pollAuthor.avatarURL : "";

  const onHandleVote = (option: number) => {
    if (!id) return;

    const uid = authedUser;
    const qid = id;
    dispatch(
      handleVoteQuestion(
        uid,
        qid,
        option === OPTION_ONE ? "optionOne" : "optionTwo"
      )
    );
  };

  if (poll && unanswered) {
    return (
      <UnansweredPoll
        poll={poll}
        authorAvatar={pollAuthorAvatar}
        onHandleVote={onHandleVote}
      />
    );
  } else if (id && poll && !unanswered) {
    const isOptionOneVoted = currentUser.answers[id] === "optionOne";
    return (
      <CompletedPoll
        poll={poll}
        authorAvatar={pollAuthorAvatar}
        isOptionOneVoted={isOptionOneVoted}
        optionOneVotes={optionOneVotes}
        optionTwoVotes={optionTwoVotes}
        totalAnswers={totalAnswers}
      />
    );
  } else {
    return (
      <div className="poll-container">
        <p>Poll not found.</p>
      </div>
    );
  }
}

export default Poll;
