function User({ authedUser }: { authedUser: string | null }) {
  const onHandleLogout = () => {
    // Handle logout logic here
    console.log("User logged out");
  };

  if (!authedUser) {
    return <div>Please login...</div>;
  }

  return (
    <div className="user-info-container">
      <div className="user-info">
        Logged in as: <strong>{authedUser}</strong>
      </div>
      <button className="logout-button" onClick={onHandleLogout}>
        Logout
      </button>
    </div>
  );
}

export default User;
