import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

const MainPage = props => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Currently Reading</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {props.books
                  .filter(book => book.shelf === 'currentlyReading')
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        changeBookShelf={props.changeBookShelf}
                        defaultShelf='currentlyReading'
                      />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Want to Read</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {props.books
                  .filter(book => book.shelf === 'wantToRead')
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        changeBookShelf={props.changeBookShelf}
                        defaultShelf='wantToRead'
                      />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Read</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {props.books
                  .filter(book => book.shelf === 'read')
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        changeBookShelf={props.changeBookShelf}
                        defaultShelf='read'
                      />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search' className='open-search-link'>
          Search
        </Link>
      </div>
    </div>
  )
}

export default MainPage
