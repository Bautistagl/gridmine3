import Image from 'next/image';
import React from 'react';

const SingleSupp = ({ title, subtitle, button, image }) => {
  return (
    <div className="singleSupp">
      <Image alt="" src={image} height={40} width={40} />
      <div className="textos-supp">
        <span>{title}</span>
        <p>{subtitle}</p>
      </div>
      <a className="wpp" href={'mailto:support@gridmine.io'}>
        <button> {button} </button>
      </a>
    </div>
  );
};

export default SingleSupp;
