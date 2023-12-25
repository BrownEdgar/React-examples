import { useState, useEffect } from 'react';

import MenuBar from './components/MenuBar/MenuBar'

export default function App() {
  const [currentData, setCurrentData] = useState([]);
  const [currentTarget, setCurrentTarget] = useState('posts');

  const changeTarget = (target) => setCurrentTarget(() => target);
  useEffect(() => {

  }, [currentTarget])


  return (
    <div className='App'>
      <MenuBar />
    </div>
  )
}
