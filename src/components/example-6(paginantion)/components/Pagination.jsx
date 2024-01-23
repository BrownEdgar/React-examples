import React from 'react'

export default function Pagination({ totalPosts, postsPerPage, paginate }) {

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i)
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map(number => (
          <li key={number} className='page-item'>
            <a
              href="!#"
              className='page-link'
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
