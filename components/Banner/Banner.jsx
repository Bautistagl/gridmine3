"use client";

const HeroSection = ({ scrollToContactForm, scrollToFeatures }) => {
  return (
    <section className="hero-section">
      <div className="background-overlay"></div>
      <div className="banner-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Turning stranded gas
              <br />
              into sustainable
              <br />
              <span className="highlight">digital infrastructure</span>
            </h1>

            <p className="hero-subtitle">
              From remote wellhead to profitable compute revenue: converting
              underutilized natural gas into modular data centers that generate
              on-site digital asset mining and high-performance computing
              solutions.
            </p>

            <div className="hero-actions">
              <button
                className="cta-button primary"
                onClick={scrollToContactForm}
              >
                <span>Get Started</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M12 6l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>

              <button
                onClick={scrollToFeatures}
                className="cta-button secondary"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M8 10l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <span>Learn More</span>
              </button>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">5MW</div>
              <div className="stat-label">Contracted Capacity</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Emission Reduction</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Operations</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 13l5 5 5-5M7 6l5 5 5-5"
                stroke="#36b079"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
