import React from 'react'
import ChargeScale from './ChargeScale'

function ProductItem({ cover, name, battery, chargingSpeed, price }) {
  return (
    <li className="product-card">
      <div className="product-image-container">
        <img src={cover} alt={name} className="product-image" />
      </div>

      <h3 className="product-title">{name}</h3>
      <span className="product-price">{price} $</span>

      <div className="product-details">
        <div className="product-detail-row">
          <span>Battery:</span>
          <ChargeScale chargeType="battery" scaleValue={battery} />
        </div>
        <div className="product-detail-row">
          <span>Charging Speed:</span>
          <ChargeScale chargeType="speed" scaleValue={chargingSpeed} />
        </div>
      </div>
    </li>
  )
}

export default ProductItem