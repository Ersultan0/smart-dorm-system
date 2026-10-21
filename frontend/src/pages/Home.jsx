import { Link } from "react-router-dom";
import dormitories from "../data/dormitories";

function Home() {
  const totalBeds = dormitories.reduce(
    (sum, dorm) => sum + dorm.availableBeds,
    0
  );

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            Smart Dormitory Management System
          </div>

          <h1>
            Find your dormitory
            <span> easily and quickly.</span>
          </h1>

          <p>
            Search available dormitories, check free rooms and submit your
            application online — all in one smart system.
          </p>

          <div className="hero-buttons">
            <Link to="/dormitories" className="primary-btn hero-link">
              Find Dormitory
            </Link>

            <Link to="/dormitories" className="secondary-btn hero-link">
              Apply Now
            </Link>
          </div>

          <div className="statistics">
            <div>
              <strong>{dormitories.length}</strong>
              <span>Dormitories</span>
            </div>

            <div>
              <strong>{totalBeds}</strong>
              <span>Available beds</span>
            </div>

            <div>
              <strong>365+</strong>
              <span>Students</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="dashboard-card">
            <p className="small-text">
              Current availability
            </p>

            <h3>{totalBeds} free places</h3>

            {dormitories.map((dorm) => (
              <div className="availability" key={dorm.id}>
                <div>
                  <span>{dorm.name}</span>
                  <strong>{dorm.availableBeds} places</strong>
                </div>

                <div className="progress">
                  <div
                    style={{
                      width: `${Math.min(
                        dorm.availableBeds * 4,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}

            <Link
              to="/dormitories"
              className="card-button card-link"
            >
              View all dormitories
            </Link>
          </div>
        </div>
      </section>

      <section className="home-dormitories">
        <div className="section-heading">
          <div>
            <p className="section-label">Accommodation</p>
            <h2>Available Dormitories</h2>
          </div>

          <Link to="/dormitories" className="view-all-link">
            View all →
          </Link>
        </div>

        <div className="dorm-grid">
          {dormitories.map((dorm) => (
            <article className="dorm-card" key={dorm.id}>
              <div className="dorm-image">
                <div className="building-icon">🏢</div>
                <span>{dorm.name}</span>
              </div>

              <div className="dorm-content">
                <div className="card-title">
                  <h3>{dorm.name}</h3>

                  <span className="available-label">
                    {dorm.availableBeds} free
                  </span>
                </div>

                <p>📍 {dorm.location}</p>

                <div className="dorm-info">
                  <span>{dorm.totalRooms} rooms</span>
                  <span>
                    From {dorm.price.toLocaleString()} ₸
                  </span>
                </div>

                <Link
                  to={`/dormitories/${dorm.id}`}
                  className="details-btn details-link"
                >
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section" id="how">
        <p className="section-label">Simple process</p>

        <h2>How it works</h2>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Find a dormitory</h3>
            <p>
              Browse available dormitories and compare your options.
            </p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Choose a room</h3>
            <p>
              Check room types, prices and available places.
            </p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Submit application</h3>
            <p>
              Fill in your personal information and apply online.
            </p>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <h3>Get approval</h3>
            <p>
              Follow the status and receive the administration decision.
            </p>
          </div>
        </div>
      </section>

      <section className="smart-section">
        <div className="smart-content">
          <p className="section-label">Intelligent system</p>

          <h2>Smart dormitory management</h2>

          <p>
            SmartDorm will combine machine learning, data analytics and an
            intelligent assistant.
          </p>

          <div className="smart-features">
            <div className="smart-card">
              <div className="smart-icon">AI</div>
              <h3>Machine Learning</h3>
              <p>
                Automatic classification and prioritization of maintenance
                requests.
              </p>
            </div>

            <div className="smart-card">
              <div className="smart-icon">📊</div>
              <h3>Analytics</h3>
              <p>
                Analyze students, rooms, applications and dormitory
                occupancy.
              </p>
            </div>

            <div className="smart-card">
              <div className="smart-icon">💬</div>
              <h3>Smart Assistant</h3>
              <p>
                Help students get information about rooms and applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="about">
        <div>
          <div className="logo footer-logo">
            <div className="logo-icon">S</div>
            <span>SmartDorm</span>
          </div>

          <p>
            Intelligent Student Dormitory Management System
          </p>
        </div>

        <p>© 2026 SmartDorm</p>
      </footer>
    </main>
  );
}

export default Home;