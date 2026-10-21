import { Link, useParams } from "react-router-dom";
import dormitories from "../data/dormitories";

function DormitoryDetails() {
  const { id } = useParams();

  const dorm = dormitories.find(
    (item) => item.id === Number(id)
  );

  if (!dorm) {
    return (
      <div className="page-container">
        <h1>Dormitory not found</h1>
      </div>
    );
  }

  return (
    <main className="page-container">
      <Link to="/dormitories" className="back-link">
        ← Back to dormitories
      </Link>

      <section className="detail-hero">
        <div className="detail-image">
          <div>🏢</div>
          <span>{dorm.name}</span>
        </div>

        <div className="detail-info">
          <span className="available-label">
            {dorm.availableBeds} places available
          </span>

          <h1>{dorm.name}</h1>

          <p className="university-name">
            {dorm.university}
          </p>

          <p>📍 {dorm.address}</p>

          <p className="detail-description">
            {dorm.description}
          </p>

          <div className="detail-stats">
            <div>
              <strong>{dorm.totalRooms}</strong>
              <span>Rooms</span>
            </div>

            <div>
              <strong>{dorm.availableBeds}</strong>
              <span>Free places</span>
            </div>

            <div>
              <strong>
                {dorm.price.toLocaleString()} ₸
              </strong>
              <span>From / month</span>
            </div>
          </div>
        </div>
      </section>

      <section className="facilities-section">
        <h2>Facilities</h2>

        <div className="facility-list">
          {dorm.facilities.map((facility) => (
            <div className="facility-item" key={facility}>
              ✓ {facility}
            </div>
          ))}
        </div>
      </section>

      <section className="rooms-section">
        <div className="section-heading">
          <div>
            <p className="section-label">
              Available rooms
            </p>

            <h2>Choose your room</h2>
          </div>
        </div>

        <div className="rooms-grid">
          {dorm.rooms.map((room) => (
            <div className="room-card" key={room.id}>
              <div>
                <span className="room-type">
                  {room.type}
                </span>

                <h3>{room.capacity} person room</h3>

                <p>
                  {room.available} places currently
                  available
                </p>
              </div>

              <div className="room-bottom">
                <div>
                  <strong>
                    {room.price.toLocaleString()} ₸
                  </strong>
                  <span>/ month</span>
                </div>

                <button className="apply-room-btn">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default DormitoryDetails;