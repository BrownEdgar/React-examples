import React from 'react'

import './MenuBar.scss'

const menuList = ['posts', 'todos', 'comments', 'albums']

export default function MenuBar() {
  return (
    <div className='Menu'>
      <ul>
        {menuList.map(menuItem => {
          return <li key={menuItem}>{menuItem}</li>
        })}
      </ul>
    </div>
  )
}
