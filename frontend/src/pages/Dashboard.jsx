import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="dashboard-page">

      <div className="dashboard-welcome">

        <div>
          <p className="dashboard-small">
            Student Dashboard
          </p>

          <h1>
            Welcome to SmartDorm 👋
          </h1>

          <p>
            Manage your dormitory application,
            accommodation and student services.
          </p>
        </div>

      </div>

      <div className="dashboard-grid">

        <Link
          to="/dormitories"
          className="dashboard-item"
        >
          <div className="dashboard-item-icon">
            🏢
          </div>

          <div>
            <h3>Dormitories</h3>

            <p>
              View available dormitories and rooms.
            </p>
          </div>
        </Link>

        <div className="dashboard-item">

          <div className="dashboard-item-icon">
            📄
          </div>

          <div>
            <h3>My Application</h3>

            <p>
              Submit and track your application.
            </p>
          </div>

        </div>

        <div className="dashboard-item">

          <div className="dashboard-item-icon">
            🛏️
          </div>

          <div>
            <h3>My Room</h3>

            <p>
              View your current accommodation.
            </p>
          </div>

        </div>

        <div className="dashboard-item">

          <div className="dashboard-item-icon">
            🔧
          </div>

          <div>
            <h3>Maintenance</h3>

            <p>
              Report dormitory problems.
            </p>
          </div>

        </div>

        <div className="dashboard-item">

          <div className="dashboard-item-icon">
            🔔
          </div>

          <div>
            <h3>Notifications</h3>

            <p>
              View important messages and updates.
            </p>
          </div>

        </div>

        <div className="dashboard-item">

          <div className="dashboard-item-icon">
            💬
          </div>

          <div>
            <h3>Smart Assistant</h3>

            <p>
              Ask questions about dormitory services.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}

export default Dashboard;