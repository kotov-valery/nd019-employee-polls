import { Link, useNavigate } from "react-router-dom";

import notFoundImage from "../assets/notfound-page.png";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/", { replace: true, state: null });
  };

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <img className="not-found-image" src={notFoundImage} alt="User Avatar" />
      <p>Sorry, the page you are looking for does not exist.</p>
      <button className="not-found-button" onClick={handleGoHome}>
        Go back to the homepage
      </button>
    </div>
  );
}

export default NotFound;
