import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'

import MainPage from './components/MainPage'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount () {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  changeBookShelf = (book, Bookshelf) => {
    BooksAPI.update(book, Bookshelf)
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  render () {
    // test my books state
    // console.log(this.state.books)
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/'>
              <MainPage
                books={this.state.books}
                changeBookShelf={this.changeBookShelf}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp
