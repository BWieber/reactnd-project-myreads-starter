import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookGrid from './BookGrid';

class Bookshelf extends Component {
    render() {
        const { 
          shelfBooks, 
          currentlyReading, 
          wantToRead, 
          booksRead, 
          updateBookLocation 
        } = this.props;

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
                    <BookGrid 
                      collection={currentlyReading} 
                      updateBookLocation={updateBookLocation}
                      shelfBooks={shelfBooks} 
                    />
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BookGrid 
                      collection={wantToRead} 
                      updateBookLocation={updateBookLocation}
                      shelfBooks={shelfBooks} 
                    />
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BookGrid 
                      collection={booksRead} 
                      updateBookLocation={updateBookLocation}
                      shelfBooks={shelfBooks} 
                    />
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