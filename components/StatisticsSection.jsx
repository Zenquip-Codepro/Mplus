import "../src/styles/StatisticsSection.css";

const StatisticsSection = () => {
  return (
    <div className="statistics-container">
      <div className="statistics-content">

        <div className="text-section">
          <h2>
            Helping a local <br />
            <span className="highlight">business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>


        <div className="stats-section">
          <div className="stat-item">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <div>
              <h3>2,245,341</h3>
              <p>Members</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="icon">
              <i className="fas fa-network-wired"></i>
            </div>
            <div>
              <h3>46,328</h3>
              <p>Clubs</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div>
              <h3>828,867</h3>
              <p>Event Bookings</p>
            </div>
          </div>
          <div className="stat-item">
            <div className="icon">
              <i className="fas fa-credit-card"></i>
            </div>
            <div>
              <h3>1,926,436</h3>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
