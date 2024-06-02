import React from 'react';

const WhatsAppContact = ({ message }) => {
  const whatsappUrl = `https://wa.me/+5491122442179?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      className="wpp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer">
      <button className="whatsapp-button2">+5491122442179</button>
    </a>
  );
};

export default WhatsAppContact;
