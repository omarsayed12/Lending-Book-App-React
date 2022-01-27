import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'
<<<<<<< HEAD
import Search from './Search'
=======

>>>>>>> eb0ebba6ff6e33472c5d889bd54c9f9d252026e6
import * as BooksAPI from './BooksAPI'
import '../css/App.css'
import Search from './Search'

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
              <Search
                changeBookShelf={this.changeBookShelf}
                books={this.props.books}
              />
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
