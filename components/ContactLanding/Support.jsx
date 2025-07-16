"use client";

const OperationsSection = () => {
  const timelineEvents = [
    {
      year: "2019",
      event: "Founders started mining in a garage in Argentina",
    },
    {
      year: "2020",
      event: "Grid Mine inception and first equity seed round of $400K",
    },
    {
      year: "2021",
      event: "Doubled operations to 250 KW and build the first air container",
    },
    {
      year: "2022",
      event: "Doubled operations to 500 KW",
    },
    {
      year: "2023",
      event: "Build an Immersion container for 500KW capacity",
    },
    {
      year: "2024",
      event:
        "Closed a deal for 5 MW to use flare gas to power our operations and expanded to 2 MW",
    },
  ];

  const operationalStats = [
    {
      title: "Up to 5 MW contracted",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
            stroke="#36b079"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "Currently 1.5 MW",
      subtitle: "800kva generator • 700kva generator",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="8"
            width="18"
            height="8"
            rx="2"
            stroke="#36b079"
            strokeWidth="2"
            fill="none"
          />
          <path d="M7 12h10M9 10v4M15 10v4" stroke="#36b079" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "In construction 2 MW",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"
            stroke="#36b079"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="#36b079"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="operations-section">
      <div className="container">
        <div className="section-header">
          <h2 className="tituloBanner">Existing Operations</h2>
        </div>

        <div className="operations-grid">
          <div className="timeline-section">
            <h3 className="subsection-title">Expanding Operations</h3>
            <div className="timeline">
              {timelineEvents.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {index < timelineEvents.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{event.year}</div>
                    <div className="timeline-event">{event.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="current-operations">
            <h3 className="subsection-title">Rio Mayo Operations</h3>

            <div className="operations-stats">
              {operationalStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <div className="stat-title">{stat.title}</div>
                    {stat.subtitle && (
                      <div className="stat-subtitle">{stat.subtitle}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="operations-gallery">
              <div className="gallery-item large">
                <div className="placeholder-image">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect
                      x="10"
                      y="15"
                      width="40"
                      height="30"
                      rx="4"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="20"
                      cy="25"
                      r="3"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M15 35 L25 30 L35 35 L45 25"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <span>Mining Equipment Transport</span>
                </div>
              </div>

              <div className="gallery-item">
                <div className="placeholder-image">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect
                      x="5"
                      y="10"
                      width="30"
                      height="20"
                      rx="2"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="8"
                      y="13"
                      width="6"
                      height="4"
                      fill="#36b079"
                      opacity="0.6"
                    />
                    <rect
                      x="16"
                      y="13"
                      width="6"
                      height="4"
                      fill="#36b079"
                      opacity="0.6"
                    />
                    <rect
                      x="24"
                      y="13"
                      width="6"
                      height="4"
                      fill="#36b079"
                      opacity="0.6"
                    />
                    <rect
                      x="8"
                      y="20"
                      width="24"
                      height="2"
                      fill="#36b079"
                      opacity="0.4"
                    />
                  </svg>
                  <span>Mining Hardware</span>
                </div>
              </div>

              <div className="gallery-item">
                <div className="placeholder-image">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect
                      x="8"
                      y="12"
                      width="24"
                      height="16"
                      rx="2"
                      stroke="#36b079"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="12"
                      y="8"
                      width="16"
                      height="4"
                      rx="1"
                      fill="#36b079"
                    />
                    <circle cx="16" cy="20" r="2" fill="#36b079" />
                    <circle cx="24" cy="20" r="2" fill="#36b079" />
                    <path d="M10 30 L30 30" stroke="#36b079" strokeWidth="2" />
                  </svg>
                  <span>Facility Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
