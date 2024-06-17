import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopCard = ({
  setProduct,
  image,
  title,
  terahash,
  link,
  precio,
  height,
  width,
  style,
  styleImage,
}) => {
  return (
    <div onClick={() => setProduct(title)} className={`shop-card ${style}`}>
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
      <div className="image-container">
        <Image
          className={`responsive-img ${styleImage}`}
          alt=""
          src={image}
          height={height}
          width={width}
        />
      </div>
      <div className="content-container">
        <h3>{title}</h3>
        <Link href={link}>
          <button className="precio-shop">{precio}</button>
        </Link>
      </div>
    </div>
  );
};

export default ShopCard;
