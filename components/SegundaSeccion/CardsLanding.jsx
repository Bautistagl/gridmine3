import React from 'react';
import SingleCard from './SingleCard';
import Image from 'next/image';

const CardsLanding = () => {
  return (
    <div className="cards-landing">
      <p>WHY PICK GRID MINE?</p>
      <h1> It&apos;s easy, we make Bitcoing mining effortless</h1>
      <div className="cards-container">
        <SingleCard
          image="/calc.png"
          title="Precision Billing"
          subtitle="Only billed for your uptime. 
          Avg 98.2%+ Uptime."
        />
        <SingleCard
          image="/shi.png"
          title="Precision Billing"
          subtitle="Only billed for your uptime. 
          Avg 98.2%+ Uptime."
        />
        <SingleCard
          image="/sec.png"
          title="Precision Billing"
          subtitle="Only billed for your uptime. 
          Avg 98.2%+ Uptime."
        />
        <SingleCard
          image="/sup2.png"
          title="Precision Billing"
          subtitle="Only billed for your uptime. 
          Avg 98.2%+ Uptime."
        />
      </div>
    </div>
  );
};

export default CardsLanding;
