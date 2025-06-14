import { UserList } from "../backend/Types";

function Leaderboard({ userList }: { userList: UserList | null }) {
  if (!userList) {
    return <div>Loading...</div>;
  }

  const sortedUsers = Object.values(userList).sort((a, b) => {
    const aScore = Object.keys(a.answers).length + a.questions.length;
    const bScore = Object.keys(b.answers).length + b.questions.length;
    return bScore - aScore;
  });

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Answers</th>
            <th>Questions</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
