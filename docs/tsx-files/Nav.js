import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">New Poll</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </nav>
  );
}

export default Nav;
