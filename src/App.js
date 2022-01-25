import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import Home from './components/home'
import Search from './components/search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render () {
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp
