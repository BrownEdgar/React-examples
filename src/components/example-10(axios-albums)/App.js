import instance from './axios.js';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import useWindowScrollPosition from './hooks/useWindowScrollPosition';

import "./App.scss"
import Child from './Child.js';

export default function App() {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [start, setStart] = useState(0)
  const positions = useWindowScrollPosition()
  useEffect(() => {
    const fetchData = () => {
      // պոստերը 100-ից հետո ստանալն անիմաստ է
      axios.all([
        instance({ url: '/photos', params: { page, _limit: 20, _start: start } }),
        instance({ url: '/posts', params: { page, _limit: 20, _start: start } })
      ])
        .then(([albums, posts]) => {
          const mergeData = albums.data.map((album, index) => {
            album.body = posts?.data[index]?.body || "Lorem ipsum dolor sit amet.";
            return album
          })
          console.log('mergeData', mergeData)
          setData([...data, ...mergeData])
          setPage(page + 1)
          setStart(start + 20)
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          console.log("fetch data is here!");
        })
    }
    if (positions.showtime) {
      fetchData()
    }

  }, [positions.showtime])


  return (
    <div className='constainer'>
      <Child>
        <h2>sad</h2>
        <button>ok</button>
      </Child>
      <h1 className='constainer__position'>{JSON.stringify(positions, null, 1)}</h1>
      {data.map(elem => {

        return (
          <div className="constainer__item" key={elem.id}>
            <img src={elem.url} alt={`product-${elem.albumId}`} />
            <div className="constainer__info">
              <h3>{elem.title}</h3>
              <p>{elem.body}</p>
            </div>

          </div>
        )
      })}
    </div>
  )
}
