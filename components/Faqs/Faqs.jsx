"use client";

const AboutUsSection = () => {
  const expertiseAreas = [
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5"
            y="15"
            width="40"
            height="25"
            rx="3"
            stroke="#36b079"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M10 25 L15 20 L20 25 L25 20 L30 25 L35 20 L40 25"
            stroke="#36b079"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="25" cy="8" r="3" fill="#36b079" />
          <path d="M25 11 L25 15" stroke="#36b079" strokeWidth="2" />
          <rect
            x="12"
            y="30"
            width="26"
            height="2"
            fill="#36b079"
            opacity="0.6"
          />
          <rect
            x="15"
            y="34"
            width="20"
            height="2"
            fill="#36b079"
            opacity="0.4"
          />
        </svg>
      ),
      title: "Blockchain Infrastructure",
      description:
        "Deep expertise in cryptocurrency mining and digital asset systems",
    },
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="18"
            stroke="#36b079"
            strokeWidth="2"
            fill="none"
          />
          <path d="M25 12 L25 25 L35 30" stroke="#36b079" strokeWidth="2" />
          <circle cx="25" cy="25" r="2" fill="#36b079" />
          <path
            d="M15 15 L20 20 M35 15 L30 20 M35 35 L30 30 M15 35 L20 30"
            stroke="#36b079"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Finance & Strategy",
      description:
        "Strategic operations and financial optimization for sustainable growth",
    },
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="12"
            width="34"
            height="26"
            rx="2"
            stroke="#36b079"
            strokeWidth="2"
            fill="none"
          />
          <rect x="12" y="16" width="26" height="2" fill="#36b079" />
          <rect
            x="12"
            y="20"
            width="20"
            height="2"
            fill="#36b079"
            opacity="0.7"
          />
          <rect
            x="12"
            y="24"
            width="24"
            height="2"
            fill="#36b079"
            opacity="0.5"
          />
          <circle
            cx="36"
            cy="28"
            r="3"
            stroke="#36b079"
            strokeWidth="2"
            fill="none"
          />
          <path d="M33 31 L39 31" stroke="#36b079" strokeWidth="2" />
        </svg>
      ),
      title: "High-Performance Computing",
      description:
        "Advanced computing solutions and platform development expertise",
    },
    {
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 8 L30 18 L25 18 L27 28 L23 28 L25 18 L20 18 L25 8 Z"
            fill="#36b079"
          />
          <rect x="15" y="30" width="20" height="4" rx="2" fill="#36b079" />
          <rect
            x="18"
            y="35"
            width="14"
            height="3"
            rx="1.5"
            fill="#36b079"
            opacity="0.7"
          />
          <circle cx="12" cy="32" r="2" fill="#36b079" opacity="0.5" />
          <circle cx="38" cy="32" r="2" fill="#36b079" opacity="0.5" />
          <path d="M10 40 L40 40" stroke="#36b079" strokeWidth="2" />
        </svg>
      ),
      title: "Gas-to-Power Systems",
      description:
        "Energy transformation and sustainable power generation technologies",
    },
  ];

  return (
    <section className="about-us-section">
      <div className="container">
        <div className="section-header">
          <h2 className="tituloBanner">About Grid Mine</h2>
          <div className="title-accent"></div>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <div className="mission-statement">
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                Grid Mine was founded by a team of{" "}
                <span className="highlight2">
                  engineers, entrepreneurs, and technologists
                </span>{" "}
                with a shared mission: to redefine how energy and computing
                intersect.
              </p>
            </div>

            <div className="vision-statement">
              <p className="vision-text">
                Grounded in innovation and driven by long-term vision, Grid Mine
                operates at the convergence of{" "}
                <span className="highlight2">
                  energy transformation and digital asset infrastructure
                </span>{" "}
                — unlocking the full potential of underutilized energy through
                powerful, low-emission computing.
              </p>
            </div>

            <div className="team-description">
              <h3 className="team-title">Our Expertise</h3>
              <p className="team-text">
                With deep experience in blockchain infrastructure, finance, and
                high-performance computing, the team brings together a diverse
                set of skills to build{" "}
                <span className="highlight2">
                  scalable, sustainable, and profitable solutions
                </span>
                . Their combined expertise spans cryptocurrency mining,
                gas-to-power systems, platform development, and strategic
                operations.
              </p>
            </div>
          </div>

          <div className="expertise-grid">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">{area.icon}</div>
                <div className="expertise-content">
                  <h4 className="expertise-title">{area.title}</h4>
                  <p className="expertise-description">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
