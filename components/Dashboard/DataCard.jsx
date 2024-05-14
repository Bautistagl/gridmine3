import React from 'react';

const DataCard = ({ title, data }) => {
  return (
    <div className="data-card">
      <h2>{title}</h2>
      <span> {data}</span>
    </div>
  );
};

export default DataCard;
