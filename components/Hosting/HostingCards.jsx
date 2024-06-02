import React from 'react';

import Image from 'next/image';
import SingleCard from '../SegundaSeccion/SingleCard';

const HostingCards = () => {
  return (
    <div className="cards-landing">
      <p>WHY MINE IN GRID MINE?</p>
      <h1> Grid Mine has many benefits for a Bitcoin Mining Operation.</h1>
      <div className="cards-container">
        <SingleCard
          image="/low-cost.png"
          title="Low Cost Of Power"
          subtitle="Ofrecemos hosting a 0,058 el kwh."
        />
        <SingleCard
          image="/earth.png"
          title="Bajos desastres naturales"
          subtitle="Argentina tiene un clima muy seguro, raramente se ven desastres naturales"
        />
        <SingleCard
          image="/idea2.png"
          title="Flare Gas"
          subtitle="Convertimos el gas de los pozos petroliferon en energia."
        />
        <SingleCard
          image="/settings1.png"
          title="Bajas Temperaturas"
          subtitle="Mantenemos el tiempo apagado al minimo debido a las bajas temperaturas en el verano"
        />
      </div>
    </div>
  );
};

export default HostingCards;
