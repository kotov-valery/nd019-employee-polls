import { Link } from "react-router-dom";
import notFoundImage from "../assets/notfound-page.png";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <img className="not-found-image" src={notFoundImage} alt="User Avatar" />
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="not-found-link">
        Go back to the homepage
      </Link>
    </div>
  );
}

export default NotFound;
