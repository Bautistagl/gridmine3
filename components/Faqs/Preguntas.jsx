import React, { useState } from 'react';

const Preguntas = () => {
  const [activeSection, setActiveSection] = useState('price');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = {
    price: [
      {
        question:
          '¿Los pedidos al por mayor me dan acceso a descuentos especiales en los mineros?',
        answer:
          'Si desea comprar 2 o más equipos de minado, nuestro equipo se encargara de aplicar el descuento equivalente a la cantidad de equipos que se compren.',
      },
      {
        question: '¿Necesito pagar extra por suministro de energía?',
        answer:
          'No, nuestros precios incluyen los costos de suministro de energía.',
      },
      {
        question:
          '¿En qué moneda están listados los precios de los equipos de minado?',
        answer:
          'Los precios de los equipos de minado en nuestro sitio web están listados en USD',
      },
      {
        question:
          '¿Los precios indicados incluyen los gastos de envío del equipo de minado?',
        answer:
          'Sí, el precio indicado incluye los costos de envío que incluyen la entrega a domicilio.',
      },
    ],
    orders: [
      {
        question: '¿Hay un límite de cantidad para un solo pedido?',
        answer: '',
      },
      {
        question:
          '¿Cómo realizar un pedido para un equipo de minado de Grid Mine?',
        answer:
          'Puede realizar su pedido a través de nuestro sitio web oficial. Puede contactarnos por WhatsApp, correo electrónico, o agenda una llamada. Nuestro equipo estará encantado de asistirle con su pedido y asegurar una entrega rápida. ¡Contáctenos hoy mismo para más detalles!',
      },
      {
        question: '¿Cómo puedo confirmar los detalles de mi pedido?',
        answer:
          'Usted recibirá una confirmación de pedido en su dirección de correo electrónico. En caso de no recibir un correo electrónico de confirmación, usted puede revisar el estado de su orden contactando a nuestro equipo',
      },
      {
        question:
          '¿Puedo alterar o modificar los detalles de mi pedido después de recibir la confirmación?',
        answer:
          'Le ayudaremos a modificar los datos de envío del cliente. Sin embargo, si el producto ha sido enviado, no podremos hacer las alteraciones necesarias.',
      },
      {
        question: '¿Cómo puedo rastrear mi pedido?',
        answer:
          'Usted recibirá actualizaciones regulares en su dirección de correo electrónico de los detalles relacionados a su pedido. Si usted no recibe ninguna actualización en su dirección de correo electrónico, puede comunicarse con nuestro equipo.',
      },
      {
        question: '¿Puedo cancelar un pedido?',
        answer:
          'No, lamentamos informarle que no permitimos cancelaciones una vez que se haya hecho el pedido.',
      },
      {
        question: '¿Cuáles son las ventajas de los pedidos al por mayor?',
        answer:
          'Si pide más de 1 equipo de minado, puede contáctenos para descuentos especiales.',
      },
      {
        question:
          '¿El juego del equipo de minado incluye cable de alimentación?',
        answer: 'Nuestros equipos de minado incluyen cable de alimentación.',
      },
      {
        question: '¿Que es la compra en lote?',
        answer:
          'Cuando vea la disponibilidad de producto en nuestro sitio web, usted encontrará el estado de entrega del minero. Lote: Con el método de lote el producto se enviará en el mes establecido pero está actualmente disponible para pedido.',
      },
    ],
    shipping: [
      {
        question: '¿Cuál es el período de garantía?',
        answer:
          'Idealmente, la garantía del fabricante varía de 180-360 días de acuerdo con en la marca y modelo del minero.',
      },
      {
        question:
          '¿Los precios de los equipos de minado incluyen gastos de envío?',
        answer:
          'Sí, los precios mencionados de un equipo de minado en este sitio web incluyen los costos de envío.',
      },
      {
        question:
          '¿Cómo se aseguran de que el proceso de envío no tenga problemas?',
        answer: '',
      },

      {
        question: '¿Envían a todo el mundo?',
        answer:
          'No, pero puede contactarse con nuestro equipo y buscar una solucion.',
      },
    ],
  };
  return (
    <div className="faqSectionContainer">
      <div className="faqSection">
        <h1>Preguntas Frecuentes</h1>
        {faqs[activeSection].map((faq, index) => (
          <div
            key={index}
            className={`faqItem ${activeFAQ === index ? 'active' : ''}`}>
            <div className="question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            <div
              className="answer"
              style={{ display: activeFAQ === index ? 'block' : 'none' }}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="faqButtons">
        <button
          onClick={() => {
            setActiveSection('price');
            setActiveFAQ(null);
          }}>
          Precio
        </button>
        <button
          onClick={() => {
            setActiveSection('orders');
            setActiveFAQ(null);
          }}>
          Pedidos y Procesamiento
        </button>
        <button
          onClick={() => {
            setActiveSection('shipping');
            setActiveFAQ(null);
          }}>
          Envíos
        </button>
      </div>
    </div>
  );
};

export default Preguntas;
