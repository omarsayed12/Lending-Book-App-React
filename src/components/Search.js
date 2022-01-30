import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

import { Link } from 'react-router-dom'

class Search extends Component {
  state = {
    query: '',
    searchNewBooks: [],
    bookSearchError: false
  }

  // function to update search Query
  updateSearchQuery = query => {
    this.setState({
      query: query
    })
    this.updateSearchBook(query)
  }

  // function to update search Books

  updateSearchBook = query => {
    if (query) {
      BooksAPI.search(query.trim()).then(searchBooks => {
        searchBooks.length > 0
          ? this.setState({
              searchNewBooks: searchBooks,
              bookSearchError: false
            })
          : this.setState({ searchNewBooks: [], bookSearchError: true })
      })
    }
    this.setState({ searchNewBooks: [], bookSearchError: false })
  }

  render () {
    // console.log(this.state.query)

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={e => this.updateSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.searchNewBooks.map(searchedBook => {
              let shelf = 'none'
              this.props.books.map(book =>
                book.id === searchedBook.id ? (shelf = book.shelf) : ''
              )
              return (
                <li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    changeBookShelf={this.props.changeBookShelf}
                    defaultShelf={shelf}
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
