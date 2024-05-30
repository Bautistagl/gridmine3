import React, { useState } from 'react';
import SingleSupp from './SingleSupp';

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
          button="Send an email"
          image="/live-chat.png"
        />
        <SingleSupp
          title="Whatsapp"
          subtitle="Talk to our experts"
          button="+54 9 11 2244‑2179"
          image="/live-chat.png"
        />
      </div>
      <form
        onSubmit={() => sendMail(name, mail, message)}
        className="support-form">
        <div className="inputs-container">
          <div className="inputs-support">
            <label>Your name</label>
            <input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputs-support">
            <label>Email Address</label>
            <input
              placeholder="Enter your email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
        </div>
        <textarea
          placeholder="Brief about the requirements"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Support;
