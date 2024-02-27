import React, { useState } from 'react'
import data from './cities.json'
import './App.scss'

export default function App() {
  const [cities, setCities] = useState(data);
  console.log(cities)
  return (
    <div className='App-cities'>
      {
        cities.map(elem => {
          return (
            <div key={elem.id}>
              <h2>{elem.name}</h2>
              <p><span>population</span>:{elem.population}</p>
              <img src={elem.images} />
            </div>
          )
        })
      }

    </div>
  )
}
