import './App.css'
import Bookshelf from './Bookshelf';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      booksRead: []
    }

    this.updateBookLocation = this.updateBookLocation.bind(this);
  }
  
  setShelfState(books) {
    this.setState({
      books: books,
      currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
      wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
      booksRead: books.filter((book) => book.shelf === 'read')
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setShelfState(books);
    })
  }

  updateBookLocation(book, newShelfType) {
    BooksAPI.update(book, newShelfType).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setShelfState(books);
      })
    })
  }

  render() {
    const { books, currentlyReading, wantToRead, booksRead } = this.state;

    return (
      <div>
        <Route exact path='/' render={() => (
          <Bookshelf 
            shelfBooks={books} 
            booksRead={booksRead}
            wantToRead={wantToRead}
            currentlyReading={currentlyReading}
            updateBookLocation={this.updateBookLocation}
          />
        )}/>

        <Route path='/search' render={({ history }) => (
          <SearchPage shelfBooks={this.state.books} updateBookLocation={this.updateBookLocation} />
        )} />
      </div>
    )
  }
}

export default BooksApp
