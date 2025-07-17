"use client";

import Image from "next/image";

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

            <div className="operations-gallery">
              <div className="gallery-item large">
                <div className="placeholder-image">
                  <Image alt="" src="/transport.jpg" width={200} height={250} />
                  <span>Mining Equipment Transport</span>
                </div>
              </div>

              <div className="gallery-item">
                <div className="placeholder-image">
                  <Image alt="" src="/equipment.jpg" width={200} height={250} />
                  <span>Mining Hardware</span>
                </div>
              </div>

              <div className="gallery-item">
                <div className="placeholder-image">
                  <Image
                    alt=""
                    src="/operations.jpg"
                    width={200}
                    height={250}
                  />
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
