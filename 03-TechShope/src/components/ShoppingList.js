import React from 'react'
import { electronicsList } from '../datas/electronicsList'
import ProductItem from './ProductItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
  return (
    <div className="shopping-list-container">
      <ul className="product-list">
        {electronicsList.map(
          ({ id, cover, name, battery, chargingSpeed, price }) => (
            <ProductItem
              key={id}
              cover={cover}
              name={name}
              battery={battery}
              chargingSpeed={chargingSpeed}
              price={price}
            />
          )
        )}
      </ul>
    </div>
  )
}

export default ShoppingList