import { Link } from "react-router-dom";
import dormitories from "../data/dormitories";

function Dormitories() {
  return (
    <main className="page-container">
      <div className="page-header">
        <p className="section-label">Accommodation</p>
        <h1>Available Dormitories</h1>

        <p>
          Compare dormitories, prices and available places.
        </p>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search dormitory..."
        />

        <select>
          <option>All room types</option>
          <option>Single Room</option>
          <option>Double Room</option>
          <option>Triple Room</option>
        </select>

        <select>
          <option>Any price</option>
          <option>Up to 30 000 ₸</option>
          <option>Up to 40 000 ₸</option>
          <option>Up to 50 000 ₸</option>
        </select>

        <button>Search</button>
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

              <p>{dorm.description}</p>

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
    </main>
  );
}

export default Dormitories;