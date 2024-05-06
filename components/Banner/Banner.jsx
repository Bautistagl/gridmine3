import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Banner = ({
  title,
  subtitle,
  imageSource,
  producto,
  buttonText1,
  buttonText2,
}) => {
  const el = useRef(null);
  const typed = useRef(null);
  // useEffect(() => {
  //     const options = {
  //         strings: [
  //         'Asics',
  //         'Inmersion liquida'

  //       ],
  //       typeSpeed: 60,
  //       backSpeed: 60,
  //       loop: true,
  //       cursorChar: ''
  //     };

  //     // elRef refers to the <span> rendered below
  //     typed.current = new Typed(el.current, options);

  //     return () => {
  //       // Make sure to destroy Typed instance during cleanup
  //       // to prevent memory leaks
  //       typed.current.destroy();
  //     }
  //   }, [])

  return (
    <div className="textosBanner">
      <div className="tituloBanner">{title}</div>
      <div className="tituloBanner"></div>
      <div className="subtituloBanner">{subtitle}</div>
      <div className="container-botones"></div>
    </div>
  );
};

export default Banner;
