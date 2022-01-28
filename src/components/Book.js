import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {
  const { book } = props
  const displayImage = book.imageLinks ? book.imageLinks.thumbnail : ''
  const title = book.title ? book.title : 'Not found the book'

  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${displayImage})`
          }}
        ></div>
        <div className='book-shelf-changer'>
          <select
            onChange={e => props.changeBookShelf(book, e.target.value)}
            value={props.defaultShelf}
          >
            <option value='move' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>{book.authors}</div>
    </div>
  )
}

Book.prototype = {
  book: PropTypes.object.isRequired
}

export default Book
