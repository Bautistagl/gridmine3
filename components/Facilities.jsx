import React from 'react';
import FacilitiesItem from './FacilitiesItem';
import Image from 'next/image';

const Facilities = () => {
  return (
    <div className="facilities">
      <div style={{ width: '50%' }}>
        <h1>The Worlds Best Mining Facilities</h1>
        <span>Available at the click of a button</span>

        <div className="facilities-items">
          <FacilitiesItem
            icon="/serving2.png"
            title="Serving ALL Miners"
            info="Compass accommodates miners of all sizes, from 1 to 100,000 machines!"
          />
          <FacilitiesItem
            icon="/leaf2.png"
            title="Green Options"
            info="Compass accommodates miners of all sizes, from 1 to 100,000 machines!"
          />
          <FacilitiesItem
            icon="/supp2.png"
            title="24/7 Support"
            info="Our facilities have around the clock video surveillance, and we offer 24/7 customer service"
          />
          <FacilitiesItem
            icon="/thunder2.png"
            title="Competitive Power"
            info="Compass facilities provide the best power price available from comparable data centers"
          />
          <span> Interested in hosting with Grid Mine?</span>
          <p> Become a Grid Mine verified hosting facility </p>
        </div>
      </div>
      <div className="facilities-fotos">
        <Image alt="" src="/mining.jpg" height={170} width={400} />
        <Image alt="" src="/mining2.jpg" height={170} width={400} />
        <Image alt="" src="/mining3.jpg" height={170} width={400} />
      </div>
    </div>
  );
};

export default Facilities;
