import React from 'react';

import Image from 'next/image';
import SingleCard from '../SegundaSeccion/SingleCard';

const HostingCards = () => {
  return (
    <div className="cards-landing">
      <p>WHY MINE IN GRID MINE?</p>
      <h1> Grid Mine has many benefits for a Bitcoin Mining Operation.</h1>
      <div style={{ display: 'flex' }}>
        <SingleCard
          image="/low-cost.png"
          title="Low Cost Of Power"
          subtitle="We offer Bitcoin Miner Hosting at $0.08 per kWh all in."
        />
        <SingleCard
          image="/earth.png"
          title="Low Natural Disaster"
          subtitle="Argentina has a safe climate, rarely seeing natural disasters"
        />
        <SingleCard
          image="/idea2.png"
          title="Clean Energy"
          subtitle="Most of our energy is renewable, sourced from Solar & Windmills."
        />
        <SingleCard
          image="/settings1.png"
          title="Cool Temperatures"
          subtitle="Downtime stays to a minimum with cool temps in the summer"
        />
      </div>
    </div>
  );
};

export default HostingCards;
