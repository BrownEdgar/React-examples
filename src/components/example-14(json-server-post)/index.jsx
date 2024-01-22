
import { useState, useEffect } from 'react';
import MainForm from './MainForm/MainForm'
import classNames from 'classnames';
import Posts from './Posts/Posts'
import axios from 'axios';

import './App.scss';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loaging, setLoaging] = useState(false)

  useEffect(() => {
    if (!loaging) {
      axios('http://localhost:3000/posts')
        .then(res => setPosts(res.data))
        .catch(console.log)
    }
  }, [setLoaging, loaging])

  return (
    <div className='App '>
      <div className="App__Form">
        <MainForm setLoaging={setLoaging} />
      </div>
      <div className={classNames('App__Posts', {
        'App__Posts-loading': loaging
      })}>
        <Posts posts={posts} />
      </div>
    </div>
  )
}
