import "./nav-bar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faBookmark,
  faNoteSticky,
} from "@fortawesome/free-regular-svg-icons";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <nav className="left-side-navbar">
      <div className="logo-container">
        <FontAwesomeIcon className="logo" icon={faBlogger} />
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a href="#" className="nav-link">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="#" className="nav-link">
          <FontAwesomeIcon icon={faBookmark} />
        </a>
        <a href="#" className="nav-link">
          <FontAwesomeIcon icon={faNoteSticky} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
