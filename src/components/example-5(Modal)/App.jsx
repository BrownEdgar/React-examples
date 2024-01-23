import { useState } from 'react'
import Moadal from './Moadal.jsx'

export default function App() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleModal = () => {
    setIsOpen(true)
  }
  return (
    <div>
      {isOpen && <Moadal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <button onClick={toggleModal}>Open modal</button>
    </div>
  )
}
