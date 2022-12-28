import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='MainMenu'>
      <h2 className='MainMenu-Title'>Users</h2>
      <nav>
        <ul className='MainMenu-List'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/podcasts">Podcasts</Link></li>
        </ul>
      </nav>
    </div>
  )
}
