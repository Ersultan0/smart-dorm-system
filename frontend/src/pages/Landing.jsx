import { Link } from "react-router-dom";

function Landing() {
  return (
    <main className="landing-page">
      <div className="landing-container">

        <div className="landing-logo">
          <div className="landing-logo-icon">
            S
          </div>

          <span>SmartDorm</span>
        </div>

        <div className="landing-badge">
          Intelligent Dormitory Management System
        </div>

        <h1>
          Smart student
          <span> dormitory management.</span>
        </h1>

        <p>
          A modern information system for students to
          apply for dormitories, manage accommodation
          and communicate with dormitory administration.
        </p>

        <div className="landing-buttons">

          <Link
            to="/login"
            className="landing-login"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="landing-register"
          >
            Register
          </Link>

        </div>

        <div className="landing-small">
          SmartDorm • IITU Diploma Project • 2026
        </div>

      </div>
    </main>
  );
}

export default Landing;