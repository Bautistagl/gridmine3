import Link from 'next/link';
import React from 'react';

const Schedule = () => {
  return (
    <div className="schedule-box">
      <h2>
        Obtene una propuesta incluyendo Hosting, Planes de garantía y opciones
        de mineros.
      </h2>
      <button>
        <Link href="https://cal.com/bautista-gonzalez-lazo-g8xn68">
          Agendá una llamada
        </Link>
      </button>
    </div>
  );
};

export default Schedule;
