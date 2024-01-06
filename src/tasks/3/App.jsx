import { useState } from 'react'
import { topTenCities } from '../../utils/constants/constants'
import './App.scss'
import Cities from './Cities'
import classNames from 'classnames';


export default function App() {
  const [activeCity, setActiveCity] = useState(topTenCities[0]);


  const chngeCity = (cityName) => {
    const city = topTenCities.find(elem => elem.name === cityName)
    setActiveCity(city ?? null)
  }
  return (
    <main>
      <div className="grid">
        {topTenCities.map(elem => elem.name).map((city) => {
          return (
            <button
              key={city}
              className={classNames('grid__button', {
                'grid__button-active': city === activeCity.name
              })}
              onClick={() => chngeCity(city)}

            >{city}</button>
          )
        })}
      </div>
      <Cities city={activeCity} />
    </main>
  )
}
