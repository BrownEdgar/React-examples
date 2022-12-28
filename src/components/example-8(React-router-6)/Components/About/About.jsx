import React from 'react'

import "./About.scss"

export default function About() {
  return (
    <div className='About'>
      <h1 className='About-Title'>About me</h1>
      <div className='About-Content'>
        <div className="About-Image"></div>
        <div className="About-Info">
          <h3 className='About-SubTitle About-SubTitle_left'>About content</h3>
          <p className="About-Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloribus repudiandae amet? Corporis iure sequi repellendus ut fugit optio, eveniet nihil, officiis ipsa veniam quod. Dolore, inventore similique. Ab nam dolorem tempora culpa aliquid minus repellat nostrum facilis nesciunt molestiae?</p>
          <p className="About-Text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos ipsam voluptas earum necessitatibus rem! Quis ex maxime placeat corrupti. Numquam expedita doloremque voluptatum mollitia deleniti, unde illum suscipit voluptas!
          </p>
        </div>
      </div>

    </div>
  )
}
