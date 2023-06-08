import React, { useState } from 'react'
import './App.scss'
import Basket from './Basket'
import SocialLinks from './SocialLinks'
import Card from './Card'

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1579065560489-989b0cc394ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=649&q=80',
      title: 'Наушники JBL',
      description: 'Наушники премиум-класса',
      price: '5 990 ₽',
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1579811216948-6f57c19376a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=641&q=80",
      title: 'Apple Watch',
      description: 'Apple Watch премиум-класса',
      price: '16 490 ₽',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBhaXJwb2R8ZW58MHx8MHxibGFja19hbmRfd2hpdGU%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Apple Airpod',
      description: 'Apple Airpod премиум-класса',
      price: '10 990 ₽',
    },
  ])
  const [productsOnBasket, setProductsOnBasket] = useState(0)
  const addTocard = () => {
    setProductsOnBasket(productsOnBasket + 1)
  }

  return (
    <>
      <div className="wrapper">
        <Basket quantity={productsOnBasket} />
        {
          products.map((card) => {
            return (
              <Card card={card} key={card.id} addTocard={addTocard} />
            )
          })
        }
      </div>
      <SocialLinks />
    </>
  )
}
