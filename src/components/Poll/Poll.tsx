import { useParams, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { handleVoteQuestion } from "../../redux/actions/questions";
import { logoutUser } from "../../redux/actions/authedUser";
import { usePollData } from "./usePollData";
import UnansweredPoll from "./UnansweredPoll";
import CompletedPoll from "./CompletedPoll";
import { AppDispatch } from "../../redux/store";

function Poll() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const {
    poll,
    currentUser,
    unanswered,
    totalAnswers,
    optionOneVotes,
    optionTwoVotes,
    pollAuthorAvatar,
    authedUser,
  } = usePollData(id);

  const onHandleVote = (option: number) => {
    if (!id) return;

    const qid = id;
    dispatch(
      handleVoteQuestion(
        authedUser,
        qid,
        option === 1 ? "optionOne" : "optionTwo"
      )
    );
  };

  if (!poll || !id) {
    // Log the user out if the poll is invalid
    dispatch(logoutUser());
    return <Navigate to="/login" state={{ from: "/404" }} replace />;
  }

  if (!authedUser || !currentUser) {
    return <Navigate to="/login" replace />;
  }

  return unanswered ? (
    <UnansweredPoll
      poll={poll}
      authorAvatar={pollAuthorAvatar}
      onHandleVote={onHandleVote}
    />
  ) : (
    <CompletedPoll
      poll={poll}
      authorAvatar={pollAuthorAvatar}
      isOptionOneVoted={currentUser.answers[id] === "optionOne"}
      optionOneVotes={optionOneVotes}
      optionTwoVotes={optionTwoVotes}
      totalAnswers={totalAnswers}
    />
  );
}

export default Poll;
