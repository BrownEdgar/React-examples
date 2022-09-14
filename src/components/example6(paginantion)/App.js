import React, { useState, useEffect } from 'react'
import Posts from './components/Posts'
import axios from 'axios'

import "./App.css"
import Pagination from './components/Pagination'

export default function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(10)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response)
      setPosts(response.data)
      setLoading(false)
    }

    fetchPost()

  }, [])

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='Container container-lg'>
      <h1 className='m-3'>My Posts</h1>
      <Posts loading={loading} posts={currentPosts} />
      <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}
