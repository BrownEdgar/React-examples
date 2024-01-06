import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { greetingsArray } from '../../constants/constants';

export default function Greeting({ name }) {
  const [index, setIndex] = useState(() => {
    return Number(localStorage.getItem('index'))
  });
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    const nextIndex = index === greetingsArray.length - 1
      ? 0
      : index + 1
    setIndex(nextIndex);
    localStorage.setItem('index', nextIndex)
  }

  useEffect(() => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 2000)
  }, [index])


  return (
    <div className='Greeting'>
      <div className="Greeting-flex">
        <ul>
          {
            greetingsArray.map(word => {
              return <li key={word} style={{
                top: -(index * 45) + 'px',
                transition: `top ${index === 0 ? 0.8 : 0.2}s`
              }}>{word}</li>
            })
          }
        </ul>
        <h1>{name}</h1>
      </div>
      <button onClick={handleClick}>Next Greeting</button>
    </div>
  )
}


Greeting.propTypes = {
  name: PropTypes.string.isRequired
}