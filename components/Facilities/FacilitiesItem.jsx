import Image from 'next/image';
import React from 'react';

const FacilitiesItem = ({ icon, title, info }) => {
  return (
    <div className="item-facility">
      <div className="facility-image">
        <Image alt="" src={icon} width={25} height={25} />
      </div>
      <h2>{title}</h2>
      <span>{info}</span>
    </div>
  );
};

export default FacilitiesItem;
