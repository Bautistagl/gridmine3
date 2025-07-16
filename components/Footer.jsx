import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="fondo-footer">
      <section className="container-footer">
        <Image alt="" src="/logoNuevo3.svg" height={160} width={380} />
      </section>
    </div>
  );
};

export default Footer;
