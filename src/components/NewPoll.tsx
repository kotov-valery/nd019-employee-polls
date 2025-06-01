function NewPoll() {
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="new-poll">
      <h1>Would You Rather</h1>
      <h2>Create Your Own Poll</h2>
      <form className="new-poll-form" onSubmit={onHandleSubmit}>
        <label className="new-poll-label">Option 1</label>
        <input className="new-poll-input" type="text" placeholder="Option 1" />

        <label className="new-poll-label">Option 2</label>
        <input className="new-poll-input" type="text" placeholder="Option 2" />

        <button className="new-poll-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPoll;
