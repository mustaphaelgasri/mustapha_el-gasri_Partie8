import React from 'react'
import batteryIcon from '../assets/battery.jpg'
import electricIcon from '../assets/electric.jpg'

const quantityLabel = {
  1: 'low',
  2: 'medium',
  3: 'high/very fast'
}

function ChargeScale({ scaleValue, chargeType }) {
  const range = [1, 2, 3]
  const iconSrc = chargeType === 'battery' ? batteryIcon : electricIcon
  const labelName = chargeType === 'battery' ? 'Battery' : 'Charging Speed'

  return (
    <div
      className="charge-scale"
      onClick={() =>
        alert(
          `This product has a ${quantityLabel[scaleValue]} level in ${labelName}`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            src={iconSrc}
            alt={chargeType}
            className="charge-scale-icon"
          />
        ) : null
      )}
    </div>
  )
}

export default ChargeScale