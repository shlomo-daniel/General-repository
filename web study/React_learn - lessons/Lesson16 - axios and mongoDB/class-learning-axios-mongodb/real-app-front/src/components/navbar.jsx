import { Link, NavLink } from "react-router-dom";
import Logo from "./logo";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-light shadow-sm"
      aria-label="Fifth navbar example"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/sign-in" className="nav-link">
                Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sign-up" className="nav-link">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
