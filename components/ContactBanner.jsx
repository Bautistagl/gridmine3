import React from 'react';
import ContactBox from './ContactBox';
import Footer from './Footer';

const ContactBanner = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h3>Jeronimo Aguirre</h3>
        <p>
          Bienvenido a mi página de agenda. Por favor, sigue las instrucciones
          para añadir un evento a mi calendario.
        </p>
        <div className="box-container">
          <ContactBox
            circle="circle1"
            title="Discovery Call"
            text="¿Quieres saber más sobre nosotros? Esta breve llamada con Jerónimo te da tiempo para contarnos sobre tus necesidades y ver si nuestro servicio es adecuado para ti."
            link="cal.com/bautista-gonzalez-lazo-g8xn68/discovery-call"
          />
          <ContactBox
            circle="circle2"
            title="Sales Call"
            text="¿Listo para comenzar a minar Bitcoin? Esta llamada con Jerónimo te da tiempo para seleccionar tu minero de Bitcoin, plan de electricidad y más."
            link="/cal.com/bautista-gonzalez-lazo-g8xn68/sales-call"
          />
        </div>
      </div>

      <div className="contact-text">
        <h1>¿Buscas Hosting? Agendá una llamada con Jerónimo.</h1>
        <span>
          Ayudamos a nuestros clientes a aprender, explorar y minar Bitcoin.
        </span>
      </div>
    </div>
  );
};

export default ContactBanner;
