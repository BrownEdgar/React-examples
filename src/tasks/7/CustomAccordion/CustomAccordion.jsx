import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './CustomAccordion.scss'

export default function CustomAccordion() {
  const [data] = useState([
    {
      id: 1,
      title: 'Accordion title N1',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat explicabo expedita sit mollitia magnam aspernatur reiciendis nemo dignissimos, qui eveniet numquam repellendus quibusdam?',
      label: 'first'
    },
    {
      id: 2,
      title: 'Accordion title N2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat explicabo expedita sit mollitia magnam aspernatur reiciendis nemo dignissimos, qui eveniet numquam repellendus quibusdam?',
      label: 'second'
    },
    {
      id: 3,
      title: 'Accordion title N3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat explicabo expedita sit mollitia magnam aspernatur reiciendis nemo dignissimos, qui eveniet numquam repellendus quibusdam?',
      label: 'third'
    },
  ])

  return (
    <div className='container'>
      <ul className='container__list'>
        {
          data.map(elem => {
            return (
              <li key={elem.id}>
                <label htmlFor={elem.label}>
                  {elem.title}
                  {' '}
                  <span><IoIosArrowDown /></span>
                </label>
                <input type="radio" name="accordion" id={elem.label} />
                <div className="content">
                  <p>
                    {elem.body}
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}