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
        question: '¿Fluctúan frecuentemente los precios en el sitio web?',
        answer: '',
      },
      {
        question:
          '¿Están actualizados los precios de los equipos de minado en el sitio web?',
        answer: '',
      },
      {
        question: '¿Están disponibles todos los equipos de minado listados?',
        answer: '',
      },
      {
        question:
          '¿Los pedidos al por mayor me dan acceso a descuentos especiales en los mineros?',
        answer: '',
      },
      {
        question: '¿Necesito pagar extra por suministro de energía?',
        answer: '',
      },
      {
        question:
          '¿En qué moneda están listados los precios de los equipos de minado?',
        answer: '',
      },
      {
        question:
          '¿Los precios indicados incluyen los gastos de envío del equipo de minado?',
        answer: '',
      },
      {
        question:
          '¿Los precios que aparecen en el sitio web se basan en precios transparentes?',
        answer: '',
      },
    ],
    orders: [
      {
        question: '¿Hay un límite de cantidad para un solo pedido?',
        answer: '',
      },
      {
        question:
          '¿Cómo realizar un pedido para un equipo de minado de Crypto Miner Bros?',
        answer: '',
      },
      {
        question: '¿Cómo puedo confirmar los detalles de mi pedido?',
        answer: '',
      },
      {
        question:
          '¿Puedo alterar o modificar los detalles de mi pedido después de recibir la confirmación?',
        answer: '',
      },
      { question: '¿Cómo puedo rastrear mi pedido?', answer: '' },
      { question: '¿Puedo cancelar un pedido?', answer: '' },
      {
        question: '¿Qué fuente de alimentación recibo: 110v o 220v?',
        answer: '',
      },
      {
        question: '¿Cuáles son las ventajas de los pedidos al por mayor?',
        answer: '',
      },
      {
        question:
          '¿El juego del equipo de minado incluye cable de alimentación?',
        answer: '',
      },
      { question: '¿Puedo ordenar directamente de la bodega?', answer: '' },
    ],
    shipping: [
      { question: '¿Cuál es el período de garantía?', answer: '' },
      {
        question:
          '¿Existen diferentes períodos de garantía para diferentes equipos de minado?',
        answer: '',
      },
      {
        question: '¿Los equipos de minado usados con un período de garantía?',
        answer: '',
      },
      {
        question:
          '¿Los precios de los equipos de minado incluyen gastos de envío?',
        answer: '',
      },
      {
        question:
          '¿Cómo se aseguran de que el proceso de envío no tenga problemas?',
        answer: '',
      },
      {
        question:
          "¿Cuánto tiempo les tomaría enviar el producto 'en inventario'?",
        answer: '',
      },
      { question: '¿Envían a todo el mundo?', answer: '' },
      {
        question: '¿Cómo pueden ayudarme a ahorrar en derechos aduaneros?',
        answer: '',
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
