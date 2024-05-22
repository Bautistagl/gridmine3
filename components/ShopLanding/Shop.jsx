import Image from 'next/image';
import React, { useState } from 'react';
import ShopCard from './ShopCard';

const Shop = () => {
  const [product, setProduct] = useState(null);
  return (
    <div className="shop-container">
      <h1>SHOP BY BRAND</h1>
      <Image alt="" src="/down.png" width={50} height={50} />
      <div className="shop-cards">
        <ShopCard
          setProduct={setProduct}
          image="/productoShop2.webp"
          title="Bitmain Antminer T21 Bitcoin Miner"
          terahash="190 Th/s"
          link="antT21"
        />
        <ShopCard
          setProduct={setProduct}
          image="/productoShop.webp"
          title="Bitmain Antminer S19K Pro Bitcoin Miner"
          terahash="230 Th/s"
          link="antS19K"
        />
      </div>
    </div>
  );
};

export default Shop;
