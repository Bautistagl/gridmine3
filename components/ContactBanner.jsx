import React, { useState } from 'react';
import ContactBox from './ContactBox';
import back from '@/axios';
import Swal from 'sweetalert2';

const ContactBanner = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h3> Jeronimo Aguirre </h3>
        <p>
          Welcome to my scheduling page. Please follow the instructions to add
          an event to my calendar.
        </p>
        <div style={{ display: 'flex' }}>
          <ContactBox
            circle="circle1"
            title="Discovery Call"
            text="Want to learn more about us? This short call with Jeronimo gives you time to let us know about your needs to see if our service is right for you."
            link="cal.com/bautista-gonzalez-lazo-g8xn68/discovery-call"
          />
          <ContactBox
            circle="circle2"
            title="Sales Call"
            text="Ready to start mining Bitcoin? This call with Jeronimo gives you time to select your Bitcoin Miner, Electricity Plan, and more!"
            link="/cal.com/bautista-gonzalez-lazo-g8xn68/sales-call"
          />
        </div>
      </div>

      <div className="contact-text">
        <h1> Looking for hosting? Book a call with Jeronimo</h1>
        <span> We help our clients learn, explore, and mine Bitcoin.</span>
      </div>
    </div>
  );
};

export default ContactBanner;
