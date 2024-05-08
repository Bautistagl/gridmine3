import Image from 'next/image';
import React from 'react';

const ProdFeat = ({ image, title, description }) => {
  return (
    <div className="prod-feat">
      <Image alt="" src={image} height={50} width={50} />
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
};

export default ProdFeat;
