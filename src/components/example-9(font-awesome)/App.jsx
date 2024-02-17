import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare, faDollar, faBurst } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function App() {
  return (
    <div>
      <FontAwesomeIcon icon={faBurst} size="3x" rotation={20} />
      <hr />
      <FontAwesomeIcon icon={faCheckSquare} size="6x" flip="vertical" />
      <hr />
      <FontAwesomeIcon icon={faDollar} size="6x" pulse />
      <hr />
      <FontAwesomeIcon icon={faFacebook} size="6x" spin />

      <hr />
      <FontAwesomeIcon icon={faFacebook} size="6x" border />
      <hr />
      <FontAwesomeIcon icon={faFacebook} size="6x" pull="right" />
      <hr />
      <FontAwesomeIcon icon={faCoffee} size="6x" transform={{ rotate: 42 }} color="green" />



    </div>
  )
}
