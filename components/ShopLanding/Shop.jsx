import Image from 'next/image';
import React, { useState } from 'react';
import ShopCard from './ShopCard';

const Shop = () => {
  const [product, setProduct] = useState(null);
  return (
    <div className="shop-container">
      <h1>SHOP BY BRAND</h1>
      <Image alt="" src="/down.png" width={50} height={50} />
      <div style={{ display: 'flex', marginTop: '100px' }}>
        <ShopCard
          setProduct={setProduct}
          image="/antminer.webp"
          title="Product"
        />
        <ShopCard
          setProduct={setProduct}
          image="/antminer.webp"
          title="Product1"
        />
        <ShopCard
          setProduct={setProduct}
          image="/antminer.webp"
          title="Product2"
        />
        <ShopCard
          setProduct={setProduct}
          image="/antminer.webp"
          title="Product3"
        />
      </div>
      {product ? <button> Buy {product} </button> : ''}
    </div>
  );
};

export default Shop;
