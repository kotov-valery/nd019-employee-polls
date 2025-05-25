function User({ authedUser }: { authedUser: string | null }) {
  if (!authedUser) {
    return <div>Please login...</div>;
  }

  return (
    <div className="user-info">
      Logged in as: <strong>{authedUser}</strong>
    </div>
  );
}

export default User;
