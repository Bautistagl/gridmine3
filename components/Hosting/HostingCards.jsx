import React from 'react';

import Image from 'next/image';
import SingleCard from '../SegundaSeccion/SingleCard';

const HostingCards = () => {
  return (
    <div className="cards-landing">
      <p>POR QUE MINAR EN GRID MINE?</p>
      <h1> Grid Mine ofrece muchos beneficios para minar Bitcoin.</h1>
      <div className="cards-container">
        <SingleCard
          image="/low-cost.png"
          title="Bajo costo energético"
          subtitle="Ofrecemos hosting a 0,058 el kwh."
        />
        <SingleCard
          image="/earth.png"
          title="Bajos desastres naturales"
          subtitle="Argentina tiene un clima muy seguro, raramente se ven desastres naturales."
        />
        <SingleCard
          image="/idea2.png"
          title="Flare Gas"
          subtitle="Convertimos el gas de los pozos petroliferon en energia."
        />
        <SingleCard
          image="/settings1.png"
          title="Bajas Temperaturas"
          subtitle="Mantenemos el tiempo apagado al minimo debido a las bajas temperaturas en el verano."
        />
      </div>
    </div>
  );
};

export default HostingCards;
