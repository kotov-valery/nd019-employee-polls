import { User } from "../../backend/Types";

function LeaderboardEntry({ user, index }: { user: User; index: number }) {
  return (
    <tr key={user.id}>
      <td>{index + 1}</td>
      <td>
        <div className="leaderboard-user-entry">
          <img
            className="leaderboard-user-avatar"
            src={user.avatarURL}
            alt={`${user.name}'s avatar`}
          />
          <div className="leaderboard-user-text">
            <span className="leaderboard-user-id">{user.id}</span>
            <span className="leaderboard-user-name">{user.name}</span>
          </div>
        </div>
      </td>
      <td>{Object.keys(user.answers).length}</td>
      <td>{user.questions.length}</td>
    </tr>
  );
}
export default LeaderboardEntry;
