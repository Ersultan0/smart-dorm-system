import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <Link
        to="/dashboard"
        className="logo"
      >

        <div className="logo-icon">
          S
        </div>

        <span>SmartDorm</span>

      </Link>

      <nav>

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/dormitories">
          Dormitories
        </NavLink>

        <a href="#">
          Applications
        </a>

        <a href="#">
          Maintenance
        </a>

        <a href="#">
          Notifications
        </a>

      </nav>

      <div className="user-menu">

        <div className="user-avatar">
          E
        </div>

        <div>
          <strong>Student</strong>
          <span>Profile</span>
        </div>

      </div>

    </header>
  );
}

export default Navbar;