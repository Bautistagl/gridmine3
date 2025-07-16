"use client";

import Image from "next/image";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Image src="/laptop.png" alt="" height={70} width={70} />,
      title: "Top Tier Technologies",
      description: "Cutting-edge mining hardware and infrastructure",
    },
    {
      icon: <Image src="/team.png" alt="" height={70} width={70} />,
      title: "Experienced Management",
      description: "Seasoned leadership to drive innovation and growth",
    },
    {
      icon: <Image src="/hand.png" alt="" height={70} width={70} />,
      title: "High Returns & Low Risk",
      description: "Optimized business model for sustainable profitability",
    },
    {
      icon: <Image src="/global-access.png" alt="" height={70} width={70} />,
      title: "Global Expansion",
      description: "Strategic vision to become a cross-border industry leader",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="intro-text">
          <div className="tituloBanner">Who we are?</div>
          <p>
            Grid Mine is a forward-thinking company with extensive experience in
            digital assets, specializing in the development of cutting-edge,
            sustainable, and profitable data centers driven by innovative
            technologies.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
