import React from 'react';
import FacilitiesItem from './FacilitiesItem';
import Image from 'next/image';
import Link from 'next/link';

const Facilities = () => {
  return (
    <div className="facilities">
      <div className="container-facilities">
        <h1>Instalaciones eficientes</h1>
        {/* <span>Available at the click of a button</span> */}

        <div className="facilities-items">
          <FacilitiesItem
            icon="/leaf2.png"
            title="Green Options"
            info="Grid Mine ofrece una minería de Bitcoin mediante el venteo de gas natural excedente"
          />
          <FacilitiesItem
            icon="/supp2.png"
            title="24/7 Support"
            info="Our facilities have around the clock video surveillance, and we offer 24/7 customer service"
          />
          <FacilitiesItem
            icon="/thunder2.png"
            title="Competitive Power"
            info="Grid Mine provide the best power price available from comparable data centers"
          />
          <span> Interested in hosting with Grid Mine?</span>

          <div className="button learn-more">
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <Link href="/contact">
              <span style={{ marginLeft: '60px' }} className="button-text">
                COMENZA
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="facilities-fotos">
        <Image alt="" src="/mining.jpg" height={170} width={400} />
        <Image alt="" src="/fotoFeature.jpg" height={170} width={400} />
      </div>
    </div>
  );
};

export default Facilities;
