import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import { AuthContext } from "../Login/AuthContext";

import { handleVoteQuestion } from "../../redux/actions/questions";

import { usePollData } from "./usePollData";
import UnansweredPoll from "./UnansweredPoll";
import CompletedPoll from "./CompletedPoll";
import LoadingBar from "../LoadingBar";

function Poll() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { isUserAuthenticated, authedUser } = useContext(AuthContext);

  const isLoading = useSelector((state: RootState) => state.loading);

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

  if (isLoading) {
    return <LoadingBar isLoading={isLoading} />;
  }

  if (!poll || !id) {
    return <Navigate to="/404" replace />;
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
