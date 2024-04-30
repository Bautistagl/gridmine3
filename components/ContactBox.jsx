import Image from 'next/image';

import React from 'react';

const ContactBox = ({ circle, title, text, link }) => {
  return (
    <>
      <div className="contact-box">
        <a href={`//${link}`} target="_blank" rel="noopener noreferrer">
          <div className="title-contact-box">
            <div className={circle}> </div>
            <h2> {title}</h2>
            <Image alt="" src="/arrow.png" height={25} width={25} />
          </div>
          <span>{text}</span>
        </a>
      </div>
    </>
  );
};

export default ContactBox;
