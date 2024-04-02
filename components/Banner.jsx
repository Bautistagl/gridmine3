import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


const Banner = ({ title, subtitle, imageSource, producto, buttonText1, buttonText2}) => {
    const el = useRef(null);
    const typed = useRef(null)
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
          <div  className="tituloBanner">{title}</div>
          <div  className="tituloBanner"></div>
          <div className="subtituloBanner">{subtitle}</div>
        <div className="container-botones">
          {/* <button className="boton-create-asic">{buttonText1}</button>
          <button onClick={()=>{scrollToContactForm()}} className="boton-create-asic2">{buttonText2}</button> */}
        </div>
      </div>
    
  );
};

Banner.defaultProps = {
  producto: "Asic Mining",
  title:
    'Power Your  Asic mining Operations with Our Reliable Hosting Solution',
  subtitle:
    'Our ASIC Mining Hosting service provides you with a secure and stable environment to house your mining rigs. With 24/7 monitoring, redundant power and cooling, and expert support, you can focus on mining while we take care of the rest. Sign up now to take your mining operations to the next level.',
  imageSource: '/iluAsic.svg',
  buttonText1: 'Create account',
  buttonText2: 'Start migrating',
};

export default Banner;
