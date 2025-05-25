import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">New Question</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
