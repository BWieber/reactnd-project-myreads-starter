import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookshelfChanger from './BookshelfChanger';
import BookGrid from './BookGrid';

class Bookshelf extends Component {
    state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      booksRead: []
    }

    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({
          books: books,
          currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
          wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
          booksRead: books.filter((book) => book.shelf === 'read')
        })
      })
    }

    render() {
        const { books, currentlyReading, wantToRead, booksRead } = this.state;

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
                    <BookGrid collection={currentlyReading} />
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BookGrid collection={wantToRead} />
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BookGrid collection={booksRead} />
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