"use client";

const EnvironmentalSection = () => {
  return (
    <section className="environmental-section">
      <div className="background-overlay"></div>
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <div className="title-container">
              <h2 className="tituloBanner">
                Our
                <br />
                Environmental
                <br />
                Vision
              </h2>
            </div>
            <h3 className="description">
              Sustainable Infrastructure for a New Energy Economy
            </h3>

            <div className="description">
              <p>
                At Grid Mine, we go beyond traditional computing — we transform
                wasted energy into low-carbon compute power by deploying
                turn-key datacenter and gas-to-power solutions directly at the
                source. <br /> By capturing flare gas and stranded energy at oil
                and gas sites, we reduce CO₂ and methane emissions by up to
                <span className="stat-highlight2">95 – 98%</span>, converting
                environmental liabilities into productive, high-performance
                infrastructure.
              </p>
            </div>

            <div className="statistics-content">
              <p>
                Through the ever-growing energy demand of Bitcoin mining, we
                optimize energy production and create new value for
                underutilized resources. Our environmentally responsible
                approach bridges the gap between energy and market —
                accelerating the transition to a cleaner, more resilient, and
                more equitable store of value.
              </p>
            </div>

            <div className="environmental-metrics">
              {/* <div className="metric-item">
                <div className="metric-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle
                      cx="20"
                      cy="20"
                      r="15"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M20 10 L20 20 L25 25"
                      stroke="#36b079"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="metric-text">
                  <span className="metric-value">24/7</span>
                  <span className="metric-label">Continuous Monitoring</span>
                </div>
              </div> */}

              {/* <div className="metric-item">
                <div className="metric-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M10 25 Q15 15, 20 25 Q25 35, 30 25"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="20" cy="20" r="3" fill="#36b079" />
                  </svg>
                </div>
                <div className="metric-text">
                  <span className="metric-value">Zero</span>
                  <span className="metric-label">Waste Energy</span>
                </div>
              </div> */}
              {/* 
              <div className="metric-item">
                <div className="metric-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M20 5 L25 15 L35 15 L27 23 L30 33 L20 27 L10 33 L13 23 L5 15 L15 15 Z"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="metric-text">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Clean Operations</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalSection;
