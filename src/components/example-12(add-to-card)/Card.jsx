import React from 'react'

export default function Card({ card, addTocard }) {
  return (
    <div className="card" >
      <img src={card.image} alt={card.title} />
      <div className="content">
        <div className="row">
          <div className="details">
            <span>{card.title}</span>
            <p>{card.description}</p>
          </div>
          <div className="price">{card.price}</div>
        </div>
        <div className="buttons">
          <button>Купить в 1 клик</button>
          <button className="cart-btn" onClick={addTocard}>В корзину</button>
        </div>
      </div>
    </div>
  )
}
