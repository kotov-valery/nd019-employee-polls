function NewPoll() {
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Create a New Poll</h1>
      <form className="new-poll-form" onSubmit={onHandleSubmit}>
        <textarea placeholder="Enter your question here" />
        <label>Option 1</label>
        <input type="text" placeholder="Option 1" />
        <label>Option 2</label>
        <input type="text" placeholder="Option 2" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPoll;
