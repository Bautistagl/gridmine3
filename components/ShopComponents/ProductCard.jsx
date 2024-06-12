import Image from 'next/image';
import React, { useState } from 'react';
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
  price1,
  price2,
  version1,
  version2,
  image,
  width,
  heigth,
}) => {
  const [selectedVersion, setSelectedVersion] = useState(version1);

  const handleSelectionChange = (version) => {
    setSelectedVersion(version);
  };

  return (
    <div className="productCard-container">
      <div className="image-product">
        <Image alt="" src={image} height={heigth} width={width} />
      </div>
      <div className="product-card">
        <h1>{title}</h1>
        <span>{description}</span>
        <div className="feats-container">
          <ProdFeat
            image="/btc.png"
            title={title2}
            description={description2}
          />
          <ProdFeat
            image="/binary.png"
            title={title3}
            description={description3}
          />
          <ProdFeat
            image="/thunder.png"
            title={title4}
            description={description4}
          />
        </div>
        <div className="version-selection">
          {version1 ? (
            <button
              className={`version-button ${
                selectedVersion === version1 ? 'selected' : ''
              }`}
              onClick={() => handleSelectionChange(version1)}>
              {version1}
            </button>
          ) : (
            ''
          )}

          {version2 ? (
            <button
              className={`version-button ${
                selectedVersion === version2 ? 'selected' : ''
              }`}
              onClick={() => handleSelectionChange(version2)}>
              {version2}
            </button>
          ) : (
            ''
          )}

          <div className="price-display">
            {selectedVersion === version1 ? (
              <h2> {price1}</h2>
            ) : (
              <h2> {price2}</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
