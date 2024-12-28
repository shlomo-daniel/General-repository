import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useContext, useState } from "react";
import { SearchContext } from "../App";
import ThemeToggle from "./common/themeToggle";
function Navbar() {
  const { user, logout } = useAuth();
  const { searchInput, setSearchInput } = useContext(SearchContext);
  const [currentInput, setCurrentInput] = useState("");

  const handleCurrentInput = (e) => {
    setCurrentInput(e.target.value);
  };

  function handleSearch(e) {
    if (e.key === "Enter" || e.type === "blur") {
      setSearchInput(() => e.target.value);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <i className="bi bi-journal-bookmark-fill m-2"></i>
          Law Office C.M.S.
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto text-center mb-2 mb-lg-0">
            <button
              type="button"
              className="nav-item dropdown btn btn-clear m-0 p-0"
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Main
              </a>
              <ul className="dropdown-menu text-center">
                <li>
                  <NavLink className="dropdown-item" to="/pages/aboutUs.jsx">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item disabled" href="#">
                    Manager Access
                  </a>
                </li>
              </ul>
            </button>

            {!user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/pages/registration.jsx">
                  Registration
                </NavLink>
              </li>
            )}

            {!user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/pages/logIn.jsx">
                  Log In
                </NavLink>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={logout}>
                  Sign Out
                </NavLink>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" to={"/pages/urgentCases.jsx"}>
                  Favorite Cards
                </NavLink>
              </li>
            )}

            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/pages/createNewCard.jsx">
                  Create Card
                </NavLink>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/pages/myCards.jsx">
                  My Cards
                </NavLink>
              </li>
            )}
          </ul>

          <ThemeToggle />

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={currentInput}
              onChange={handleCurrentInput}
              onKeyDown={handleSearch}
              onBlur={handleSearch}
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
