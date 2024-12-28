import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

function Footer() {
  const { user } = useAuth();
  return (
    <footer
      className="container-fluid d-flex justify-content-evenly align-items-center gap-3"
      style={{ minHeight: "55px" }}
    >
      <div className="d-flex justify-content-center gap-2">
        <i className="bi bi-journal-bookmark-fill"></i>
        <NavLink to="/" className="link-underline-opacity-0 link-body-emphasis">
          Law Office C.M.S.
        </NavLink>
      </div>
      <div className="d-flex gap-3 ">
        <NavLink
          to="/pages/aboutUs.jsx"
          className="link-underline-opacity-0 link-body-emphasis"
        >
          About Us
        </NavLink>

        {user && (
          <NavLink
            to={"/pages/myCards.jsx"}
            className="link-underline-opacity-0 link-body-emphasis"
          >
            My Cases
          </NavLink>
        )}
      </div>
    </footer>
  );
}
export default Footer;
