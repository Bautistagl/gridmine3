import Image from 'next/image';
import React from 'react';

const Status = ({ uno, dos, tres }) => {
  return (
    <div className="status-box">
      <div className="status-1">
        <Image alt="" src="/uno.png" height={10} width={10} />
        <span>{uno}</span>
      </div>
      <div className="status-2">
        <Image alt="" src="/dos.png" height={10} width={10} />
        <span>{dos}</span>
      </div>
      <div className="status-3">
        <Image alt="" src="/tres.png" height={10} width={10} />
        <span>{tres}</span>
      </div>
    </div>
  );
};

export default Status;
