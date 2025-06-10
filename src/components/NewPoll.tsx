import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { handleNewQuestion } from "../redux/actions/questions";
import { AppDispatch } from "../redux/store";

function NewPoll() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const onChangeOptionOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionOne(e.target.value);
  };
  const onChangeOptionTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionTwo(e.target.value);
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(handleNewQuestion(optionOne, optionTwo));
    navigate("/");
  };

  return (
    <div className="new-poll">
      <h1>Would You Rather</h1>
      <h2>Create Your Own Poll</h2>
      <form className="new-poll-form" onSubmit={onHandleSubmit}>
        <label className="new-poll-label">Option 1</label>
        <input
          className="new-poll-input"
          type="text"
          placeholder="Option 1"
          value={optionOne}
          onChange={onChangeOptionOne}
        />

        <label className="new-poll-label">Option 2</label>
        <input
          className="new-poll-input"
          type="text"
          placeholder="Option 2"
          value={optionTwo}
          onChange={onChangeOptionTwo}
        />

        <button className="new-poll-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPoll;
