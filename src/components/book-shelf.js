import React from 'react'
import Book from './book'

const BookShelf = ({ ShelfTitle }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{ShelfTitle}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          <Book />
          <Book />
          <Book />
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
