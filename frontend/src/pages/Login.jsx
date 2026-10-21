import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    navigate("/dashboard");
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <Link to="/" className="auth-brand">
          <div className="auth-logo">S</div>

          <span>SmartDorm</span>
        </Link>

        <h1>Welcome back</h1>

        <p>
          Login to continue to SmartDorm.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="student@iitu.edu.kz"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <div className="forgot-password">
            Forgot password?
          </div>

          <button
            type="submit"
            className="auth-submit"
          >
            Login
          </button>

        </form>

        <p className="auth-bottom">
          Don't have an account?{" "}

          <Link to="/register">
            Register
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

export default Login;