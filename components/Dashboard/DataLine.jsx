import Image from 'next/image';
import React from 'react';

const DataLine = ({ state, name, hashrate, efficiency, revenue }) => {
  return (
    <div className="data-line">
      {/* <Image alt="" src={state} height={20} width={20} /> */}
      <div className={state}></div>
      <span>{name}</span>
      <span>{hashrate}</span>
      <span>{efficiency}</span>
      <span>{revenue}</span>
    </div>
  );
};

export default DataLine;
