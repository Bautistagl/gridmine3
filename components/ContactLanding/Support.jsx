import React, { useState } from 'react';
import SingleSupp from './SingleSupp';
import SingleSupp2 from './SingleSupp2';
import Swal from 'sweetalert2';

const Support = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = async (name, email, message) => {
    try {
      const response = await fetch('/api/contactMail', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      console.log('Emails sent successfully');
      Swal.fire({
        icon: 'success',
        title: 'Correo enviado',
        text: 'Tu consulta ha sido enviada con éxito y hemos enviado una confirmación a tu correo electrónico.',
      });

      // Clear the form fields
      setName('');
      setMail('');
      setMessage('');
    } catch (error) {
      console.error('Failed to send email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar tu consulta. Por favor, intenta de nuevo más tarde.',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMail(name, mail, message);
  };

  return (
    <div className="support-container">
      <div className="single-container">
        <SingleSupp
          title="Email"
          subtitle="support@gridmine.io"
          button="Envianos un mail"
          image="/live-chat.png"
        />
        <SingleSupp2
          title="Whatsapp"
          subtitle="Habla con nuestros expertos"
          button="+54 9 11 2244‑2179"
          image="/live-chat.png"
        />
      </div>
      <form onSubmit={handleSubmit} className="support-form">
        <div className="inputs-container">
          <div className="inputs-support">
            <label>Nombre</label>
            <input
              placeholder="Escribí tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputs-support">
            <label>Email </label>
            <input
              placeholder="Escribí tu email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
        </div>
        <textarea
          placeholder="Leve descripción sobre la consulta a hacer."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Support;
