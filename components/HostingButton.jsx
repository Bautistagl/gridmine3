import React from 'react';

const HostingButton = ({ message }) => {
  const whatsappUrl = `https://wa.me/+5491138824301?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button className="whatsapp-button2">Solicitar hosting</button>
    </a>
  );
};

export default HostingButton;
