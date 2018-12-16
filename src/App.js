import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf';
import SearchPage from './SearchPage';

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

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Bookshelf />
        )}/>

        <Route path='/search' render={({ history }) => (
          <SearchPage />
        )} />
      </div>
    )
  }
}

export default BooksApp
