import { useEffect, useRef, } from 'react';
import './Title.scss'

import PropTypes from 'prop-types';
export default function Title({ as, hedding }) {
  console.log('ok');
  const Element = as;

  const titleRef = useRef(null)
  useEffect(() => {
    titleRef.current.classList.remove('active')
    setTimeout(() => {
      titleRef.current.classList.add('active');
    }, 20);

    () => {
      console.log('remove');
      titleRef.current.classList.remove('active')
    }
  }, [hedding])

  return (
    <Element ref={titleRef}>
      <span className='letter'>{hedding.at(0)}</span>
      {hedding.slice(1)}
    </Element>
  )
}
Title.defaultProps = {
  as: 'h1'
}

Title.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3']),
  hedding: PropTypes.string.isRequired
}