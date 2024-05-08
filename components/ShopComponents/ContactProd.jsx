import React from 'react';

const ContactProd = () => {
  return (
    <div>
      <form className="support-form2">
        <div className="inputs-container2">
          <div className="inputs-support2">
            <label>First Name</label>
            <input placeholder="Enter your name" />
          </div>
          <div className="inputs-support2">
            <label>Last Name</label>
            <input placeholder="Enter your email" />
          </div>
          <div className="inputs-support2">
            <label>Email</label>
            <input placeholder="Enter your email" />
          </div>
          <div className="inputs-support2">
            <label>Phone</label>
            <input placeholder="Enter your email" />
          </div>
        </div>
        <textarea placeholder="Let us know the number of machines you are looking to purchase, and any other questions." />
        <button type="submit">Request Quote</button>
      </form>
    </div>
  );
};

export default ContactProd;
