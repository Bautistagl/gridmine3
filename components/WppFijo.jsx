import React from 'react';

const FloatingWhatsAppButton = ({ message }) => {
  const whatsappUrl = `https://wa.me/+5491122442179?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-button">
      <img src="/wpp.png" alt="WhatsApp" />
    </a>
  );
};

export default FloatingWhatsAppButton;
