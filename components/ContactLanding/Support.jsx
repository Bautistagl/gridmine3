import React, { useState } from 'react';
import SingleSupp from './SingleSupp';
import SingleSupp2 from './SingleSupp2';

const Support = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const sendMail = async (name, email, message) => {
    try {
      await fetch('/api/contactMail', {
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
    } catch (error) {
      console.error('Failed to send email:', error);
      // Handling error, you can display an alert or do other actions here
    }
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
          button="+54 9 11 2244‑2179"
          image="/live-chat.png"
        />
      </div>
      <form
        onSubmit={() => sendMail(name, mail, message)}
        className="support-form">
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
              placeholder="Escribí tu nombre"
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
