import Image from 'next/image';
import React from 'react';

const ShopCard = ({ setProduct, image, title }) => {
  return (
    <div onClick={() => setProduct(title)} className="shop-card">
      <Image alt="" src={image} height={200} width={230} />
      <h3>{title}</h3>
    </div>
  );
};

export default ShopCard;
