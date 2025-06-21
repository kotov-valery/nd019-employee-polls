import { useParams, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";
import { AuthContext } from "../Login/AuthContext";

import { handleVoteQuestion } from "../../redux/actions/questions";

import { usePollData } from "./usePollData";
import UnansweredPoll from "./UnansweredPoll";
import CompletedPoll from "./CompletedPoll";
import { useContext } from "react";

function Poll() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { isUserAuthenticated, logout, authedUser } = useContext(AuthContext);

  const {
    poll,
    currentUser,
    unanswered,
    totalAnswers,
    optionOneVotes,
    optionTwoVotes,
    pollAuthorAvatar,
  } = usePollData(id);

  const onHandleVote = (option: number) => {
    if (!id || !authedUser) return;

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
    logout();
    return <Navigate to="/login" state={{ path: "/404" }} replace />;
  }

  if (!isUserAuthenticated() || !currentUser) {
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
