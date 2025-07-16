"use client";

import Image from "next/image";

const BusinessModelSection = () => {
  const processSteps = [
    {
      icon: <Image src="/gas-well.png" alt="" height={70} width={70} />,
      title: "Natural Gas",
      description:
        "Our relationships in the oil and gas sector allowed us to sign commercial agreements with companies in Argentina to ensure the supply of the methane gas.",
    },
    {
      icon: <Image src="/thunder.png" alt="" height={70} width={70} />,
      title: "Electricity",
      description:
        "We use advanced technologies to capture and transform vented and stranded gas into a valuable energy source for our data center operations.",
    },
    {
      icon: <Image src="/group.png" alt="" height={70} width={70} />,
      title: "Computations",
      description:
        "This energy can be used for AI, Bitcoin Mining, Web3 hosting, among others.",
    },
    {
      icon: <Image src="/bitcoin-logo.png" alt="" height={70} width={70} />,
      title: "Revenue",
      description:
        "We are on top tier bitcoin miners, producing hash power and having a direct cost of less than $18,000 per bitcoin.",
    },
  ];

  return (
    <section className="business-model-section">
      <div className="container">
        <div className="section-header">
          <h2 className="tituloBanner">Our Business Model</h2>
          <p className="section-subtitle">
            Natural gas is converted into electricity by generators to power
            bitcoin mining data centers located at natural gas sites.
          </p>
        </div>

        <div className="process-flow">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon-container">
                <div className="step-icon">{step.icon}</div>
                {index < processSteps.length - 1 && (
                  <div className="arrow-connector">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                      <path
                        d="M5 10 L30 10 M25 5 L30 10 L25 15"
                        stroke="#36b079"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
