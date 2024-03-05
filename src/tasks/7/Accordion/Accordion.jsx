import { useState } from 'react'
import './Accordion.scss'
import { RiArrowDownSLine } from "react-icons/ri";
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classNames('accordion', {
      active: isOpen
    })}>
      <div
        className={classNames("accordion__header", {
          active: isOpen
        })}
        onClick={toggleAccordion}
      >
        <p className='accordion__title'>{title}</p>
        <span className={classNames("accordion__icon", {
          active: isOpen
        })}><RiArrowDownSLine /></span>
      </div>
      {
        isOpen ? (
          <div className="accordion__content">
            {children}
          </div>
        ) : null
      }
    </div>
  )
}