import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookGrid from './BookGrid';

class Bookshelf extends Component {
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
        const { currentlyReading, wantToRead, booksRead } = this.state;

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BookGrid collection={currentlyReading} updateBookLocation={this.updateBookLocation} />
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BookGrid collection={wantToRead} updateBookLocation={this.updateBookLocation}/>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BookGrid collection={booksRead} updateBookLocation={this.updateBookLocation}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link 
                to='search'
              > <button> Add a Book </button></Link>
            </div>
          </div>
        )
    }
}

export default Bookshelf