function User({ authedUser }: { authedUser: string | null }) {
  if (!authedUser) {
    return <div>Please login...</div>;
  }

  return (
    <div className="user">
      <h1>Welcome, {authedUser}!</h1>
    </div>
  );
}

export default User;
