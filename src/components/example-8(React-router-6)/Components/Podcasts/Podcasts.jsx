import React from 'react'
import { Podcast } from '../Podcast'

import "./Podcasts.scss"

export default function Podcats() {
  return (
    <div className='Podcasts'>
      {
        [...Array(4).keys()].map(elem => {
          return <Podcast key={elem} />
        })
      }
    </div>
  )
}
