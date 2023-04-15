import React from 'react'

export default function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <ul className='list'>
      {posts.map(post => {
				return <li key={post.id} className='list-item list-item_md'>
          {post.title}
        </li>
      })}
    </ul>
  )
}
