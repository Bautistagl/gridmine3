import Image from 'next/image';
import React from 'react';
import ProdFeat from './ProdFeat';

const ProductCard = ({
  title,
  description,
  title2,
  description2,
  title3,
  description3,
  title4,
  description4,
  image2,
  image3,
  image4,
}) => {
  return (
    <div className="productCard-container">
      <Image alt="" src="/iluAsic.svg" height={750} width={750} />
      <div className="product-card">
        <h1>{title}</h1>
        <span>{description}</span>
        <div className="feats-container">
          <ProdFeat
            image="/neural.png"
            title={title2}
            description={description2}
          />
          <ProdFeat
            image="/settings1.png"
            title={title3}
            description={description3}
          />
          <ProdFeat
            image="/idea2.png"
            title={title4}
            description={description4}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
