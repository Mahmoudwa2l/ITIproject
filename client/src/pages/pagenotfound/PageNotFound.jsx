import { NavLink } from "react-router-dom";
import "./PageNotFound.css";
function PageNotFound() {
  return (
    <div className="pt-5 notfound">
      <div class="container text-center">
        <div class="brand p-5">
          <span class="glyphicon glyphicon-king" aria-hidden="true"></span>
        </div>
        <h1 class="head">
          <span>404</span>
        </h1>
        <p>Oops! The Page you requested was not found!</p>
        <NavLink className="btn-outline" to="/">
          Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default PageNotFound;
