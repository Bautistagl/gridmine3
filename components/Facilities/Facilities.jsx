import React from 'react';
import FacilitiesItem from './FacilitiesItem';
import Image from 'next/image';
import Link from 'next/link';

const Facilities = () => {
  return (
    <div className="facilities">
      <div className="container-facilities">
        <h1>Instalaciones eficientes</h1>
        {/* <span>Available at the click of a button</span> */}

        <div className="facilities-items">
          <FacilitiesItem
            icon="/leaf2.png"
            title="Sustentabilidad"
            info="Grid Mine ofrece una minería de Bitcoin mediante el venteo de gas natural excedente"
          />
          <FacilitiesItem
            icon="/supp2.png"
            title="Soporte 24/7"
            info="Nuestras instalaciones cuentan con vigilancia por video las 24 horas del día, y ofrecemos servicio al cliente las 24 horas, los 7 días de la semana."
          />
          <FacilitiesItem
            icon="/thunder2.png"
            title="Bajo costo energético"
            info="Grid Mine ofrece el mejor costo energético entre la competencia."
          />
          <span> Interesado en el hosting con Grid Mine?</span>

          <div className="button learn-more">
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <Link href="/contact">
              <span style={{ marginLeft: '60px' }} className="button-text">
                COMENZA
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="facilities-fotos">
        <Image alt="" src="/mining.jpg" height={170} width={400} />
        <Image alt="" src="/fotoFeature.jpg" height={170} width={400} />
      </div>
    </div>
  );
};

export default Facilities;
