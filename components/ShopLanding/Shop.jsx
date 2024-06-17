import Image from 'next/image';
import React, { useState } from 'react';
import ShopCard from './ShopCard';

const Shop = () => {
  const [product, setProduct] = useState(null);
  return (
    <div className="shop-container">
      <h1>Productos Disponibles</h1>
      <Image alt="" src="/down.png" width={50} height={50} />
      <div className="shop-cards">
        <ShopCard
          setProduct={setProduct}
          image="/ProductoShop.webp"
          title="Bitmain Antminer S19K Pro Bitcoin Miner"
          terahash="120 Th/s"
          link="antS19K"
          precio="US$ 1000"
          height={250}
          width={250}
          style={''}
          styleImage={''}
        />
        <div>
          <ShopCard
            setProduct={setProduct}
            image="/antminer21.png"
            title="Bitmain Antminer T21 Bitcoin Miner"
            terahash="190 Th/s"
            link="antT21"
            precio="US$ 1000"
            height={250}
            width={250}
            style={2}
            styleImage={2}
          />
        </div>
        <ShopCard
          setProduct={setProduct}
          image="/ProductoShop.webp"
          title="Bitmain Antminer S21 BTC Miner "
          terahash="195 Th/s"
          link="antS21"
          precio="US$ 1000"
          height={250}
          width={250}
          style={''}
          styleImage={''}
        />
      </div>
    </div>
  );
};

export default Shop;
