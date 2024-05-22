import React from 'react';

const Banner = ({ title, subtitle }) => {
  return (
    <div className="textosBanner">
      <div className="tituloBanner">{title}</div>
      <div className="subtituloBanner">{subtitle}</div>
      <div className="container-botones"></div>
    </div>
  );
};

export default Banner;
