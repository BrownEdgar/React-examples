import React, { useEffect, useState } from 'react'
import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from "react-icons/tb";
import './App.css'
export default function App() {
  const [posts, setposts] = useState([]);
  const [curentIndex, setCurentIndex] = useState(1)
  const [nextPost, setNextPost] = useState({});

  useEffect(() => {
    const firstPost = fetch(`https://jsonplaceholder.typicode.com/posts/${curentIndex}`)

    const secondPost = fetch(`https://jsonplaceholder.typicode.com/posts/${curentIndex + 1}`)
    Promise.all([firstPost, secondPost])
      .then(async (res) => {
        const post1 = await res[0].json()
        const post2 = await res[1].json()
        return [post1, post2]
      })
      .then(data => setposts(data))


  }, [curentIndex])

  const next = () => {
    setCurentIndex(curentIndex <= 97 ? curentIndex + 2 : curentIndex);
  }

  const prev = () => {
    if (curentIndex > 1) {
      setCurentIndex(curentIndex - 2);
    }
  }

  return (
    <div className='App'>
      <button onClick={prev} disabled={curentIndex === 1} >
        <TbArrowBigLeftFilled />
      </button>
      {posts.map(elem => {
        return (
          <div className='App__content' key={elem.id}>
            <span>{elem.id}</span>
            <h2>{elem.title}</h2>
            <p>{elem.body}</p>
          </div>
        )
      })}
      <button onClick={next} disabled={curentIndex === 99}>
        <TbArrowBigRightFilled />
      </button>
    </div>
  )
}
