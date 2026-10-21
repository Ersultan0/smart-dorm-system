import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    navigate("/dashboard");
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <Link to="/" className="auth-brand">

          <div className="auth-logo">
            S
          </div>

          <span>SmartDorm</span>

        </Link>

        <h1>Create account</h1>

        <p>
          Register as a SmartDorm student.
        </p>

        <form onSubmit={handleRegister}>

          <label>Full name</label>

          <input
            type="text"
            placeholder="Full name"
            required
          />

          <label>Student ID</label>

          <input
            type="text"
            placeholder="Student ID"
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="student@iitu.edu.kz"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create password"
            required
          />

          <button
            type="submit"
            className="auth-submit"
          >
            Create Account
          </button>

        </form>

        <p className="auth-bottom">

          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </p>

        <Link
          to="/"
          className="back-home"
        >
          ← Back to home
        </Link>

      </div>

    </main>
  );
}

export default Register;