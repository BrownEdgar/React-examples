import React from 'react'

export default function Basket({ quantity }) {
  return (
    <div className="cart-nav">
      <div className="icon">
        <i className="fas fa-shopping-cart"></i>
        <span>Корзина</span>
      </div>
      <div className="item-count">{quantity}</div>
    </div>
  )
}
