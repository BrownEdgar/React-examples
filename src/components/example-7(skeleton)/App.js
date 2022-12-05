import React, { useState } from 'react'
import MyLoader from './Loader'

import "./App.scss"

export default function App() {
  const [loading, setLoading] = useState(true)
  return (
    <div className='main'>
      {loading
        ? <MyLoader />
        : (
          <>
            <h1>Lorem, ipsum.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex commodi libero vitae quasi harum placeat doloremque dolores! Consequuntur ullam debitis quia? Veniam perspiciatis atque sequi ad modi? Quidem, eum.</p>
          </>
        )}
    </div>
  )
}
