import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Posts from '../components/Posts';


import './App.css'


export default function App() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(6)



  const endOffset = page + itemsPerPage;

  const currentItems = posts.slice(page, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);


  const handlePageClick = (event) => {
    console.log('event.selected:', event.selected);
    setPage(event.selected);
  }
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
    }
    fetchPost()
  }, [])
  return (
    <>
      <Posts posts={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<i className="fa-solid fa-chevron-right"></i>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<i className="fa-solid fa-chevron-left"></i>}
        renderOnZeroPageCount={null}
        className='navigation'
        pageClassName="pg-item"
      />
    </>
  );
}

