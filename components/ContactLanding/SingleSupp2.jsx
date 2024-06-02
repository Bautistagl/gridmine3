import Image from 'next/image';
import React from 'react';
import WhatsAppContact from '../ContactWpp';

const SingleSupp2 = ({ title, subtitle, button, image }) => {
  return (
    <div className="singleSupp">
      <Image alt="" src={image} height={40} width={40} />
      <div className="textos-supp">
        <span>{title}</span>
        <p>{subtitle}</p>
      </div>
      <WhatsAppContact message="Hola, queria consultar sobre el servicio de hosting." />
    </div>
  );
};

export default SingleSupp2;
