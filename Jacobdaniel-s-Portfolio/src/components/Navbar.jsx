import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Jacob Daniels
        </Link>
        <div className="navbar-links">
          <NavLink to="/" className="navbar-link" end>
            Home
          </NavLink>
          <NavLink to="/about" className="navbar-link">
            About
          </NavLink>
          <NavLink to="/projects" className="navbar-link">
            Projects
          </NavLink>
          <NavLink to="/resume" className="navbar-link">
            Resume
          </NavLink>
          <NavLink to="/contact" className="navbar-link">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}