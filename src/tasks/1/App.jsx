import './App.scss'
import { useState, useEffect } from 'react';
import MenuBar from './components/MenuBar/MenuBar'
import axios from 'axios';
import List from './components/List/List';

export default function App() {
  const [currentData, setCurrentData] = useState([]);
  const [currentTarget, setCurrentTarget] = useState('posts');

  const changeTarget = (target) => setCurrentTarget(() => target);
  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: currentTarget,
      params: {
        _limit: 5
      }
    }).then(res => setCurrentData(res.data))
  }, [currentTarget])


  return (
    <div className='App'>

      <MenuBar changeTarget={changeTarget} currentTarget={currentTarget} />
      <List data={currentData} currentTarget={currentTarget} />
    </div>
  )
}
