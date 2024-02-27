import React, { useState } from 'react'
import './App.scss'
import classNames from 'classnames';

const arr = ['black', 'blue', 'yellow']

export default function App() {
  const [currentBg, setCurrentBg] = useState(arr[0]);

  const handleClick = (color) => setCurrentBg(color)

  return (
    <div className='App'>
      <h1>background is: <span>{currentBg}</span></h1>
      <div className={
        classNames("App__block", {
          [`App__block-${currentBg}`]: currentBg === 'yellow'
        })} style={{
          backgroundColor: `${currentBg}`,
        }}>
        <h2>
          <span>React events</span>
          (change backgrounds)
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis recusandae dolore laboriosam at voluptatum ullam minima inventore incidunt, in rerum praesentium, ipsa, cum perferendis numquam molestiae. Perspiciatis adipisci ipsam similique?</p>
        <div className="App__buttons" >
          {arr.map(elem => {
            return (
              <button
                key={elem}
                className={`btn btn-${elem}`}
                onMouseEnter={() => handleClick(elem)}
              >
                {elem}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
