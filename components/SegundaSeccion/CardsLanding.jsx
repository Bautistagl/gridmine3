import React from 'react';
import SingleCard from './SingleCard';
import Image from 'next/image';

const CardsLanding = () => {
  return (
    <div className="cards-landing">
      <h1> Hosting</h1>
      <p>WHY PICK GRID MINE?</p>
      <div className="cards-container">
        {/* <SingleCard
          image="/calc.png"
          title="Precision Billing"
          subtitle="Only billed for your uptime. 
          Avg 98.2%+ Uptime."
        /> */}
        <SingleCard
          image="/shi.png"
          title="Reparaciones Inlcuídas"
          subtitle="Todas las reparaciones de mineros estan incluídas por los primeros 12 meses"
        />
        <SingleCard
          image="/sec.png"
          title="Seguridad"
          subtitle="24-7-365 on-site security"
        />
        <SingleCard
          image="/sup2.png"
          title="Customer Support"
          subtitle="Para nosotros el servicio al cliente lo es todo."
        />
      </div>
    </div>
  );
};

export default CardsLanding;
