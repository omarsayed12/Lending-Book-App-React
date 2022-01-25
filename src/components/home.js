import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './book-shelf'

const Home = () => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <BookShelf ShelfTitle='Currently Reading' />
          <BookShelf ShelfTitle='Want To Read' />
          <BookShelf ShelfTitle='Currently Reading' />
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search' className='open-search-link'>
          Add
        </Link>
      </div>
    </div>
  )
}

export default Home
