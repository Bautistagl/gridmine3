import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopCard = ({ setProduct, image, title, terahash, link }) => {
  return (
    <div onClick={() => setProduct(title)} className="shop-card">
      <div className="terahash">
        <Image
          className="icono-bitcoin"
          alt=""
          src="/bitcoin.png"
          height={25}
          width={25}
        />
        <span> {terahash}</span>
      </div>
      <Image
        className="responsive-img"
        alt=""
        src={image}
        height={200}
        width={230}
      />
      <h3>{title}</h3>
      <Link href={link}>
        <button className="precio-shop">US$5,200 - US$7,233</button>
      </Link>
    </div>
  );
};

export default ShopCard;
