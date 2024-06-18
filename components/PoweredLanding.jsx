import Image from 'next/image';
import React from 'react';

const Powered = () => {
  return (
    <section className="contenedor-powered">
      <div className="powered">SOCIO ESTRATEGICO</div>
      <Image
        height={90}
        width={233}
        className="logo-flux"
        alt="logo-cryptoGranjas"
        src={'/socioEstra.jpg'}
      />
    </section>
  );
};

export default Powered;
