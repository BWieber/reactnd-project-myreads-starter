import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookshelfChanger from './BookshelfChanger';


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
                    <ol className="books-grid">
                      {currentlyReading.length > 0 && (
                        currentlyReading.map((book) =>
                          <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <BookshelfChanger />
                              </div>
                              <div className="book-title"> {`${book.title}`} </div>
                              <div className="book-authors">
                                {book.authors}
                              </div>
                            </div>
                          </li>
                        )
                      )}
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {wantToRead.length > 0 && (
                        wantToRead.map((book) =>
                          <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <BookshelfChanger />
                              </div>
                              <div className="book-title"> {`${book.title}`} </div>
                              <div className="book-authors">
                                {book.authors}
                              </div>
                            </div>
                          </li>
                        )
                      )}
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {booksRead.length > 0 && (
                        booksRead.map((book) =>
                          <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <BookshelfChanger />
                              </div>
                              <div className="book-title"> {`${book.title}`} </div>
                              <div className="book-authors">
                                {book.authors}
                              </div>
                            </div>
                          </li>
                        )
                      )}
                    </ol>

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