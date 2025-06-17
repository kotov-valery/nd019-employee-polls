import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="not-found-link">
        Go back to the homepage
      </Link>
    </div>
  );
}

export default NotFound;
