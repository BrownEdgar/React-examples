import React from 'react'
import { CgCalendarDates } from "react-icons/cg";

import "./Podcast.scss"

export default function Podcast() {
  return (
    <article className='Podcast'>
      <div className="Podcast-Content">
        <h2 className='Podcast-Title'>Podcast Title</h2>
        <p className='Podcast-Date'>
          <span className='Podcast-Date_Icon'>
            <CgCalendarDates />
          </span>
          <span>Mon, May 25th 2022</span>
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quasi reiciendis itaque facilis assumenda distinctio voluptates, ipsum, dolore, hic  doloribus? Sequi praesentium illum nisi deleniti deserunt, molestiae quia illo aspernatur blanditiis, impedit, saepe unde est tenetur dolore voluptatum.</p>
        <div className="Podcast-Buttons">
          <button>Podcast</button>
          <button>55 mins.</button>
          <button>Play Episode</button>
        </div>

      </div>
      <div className="Podcast-ImageBox">
        <div></div>
      </div>
    </article>
  )
}
