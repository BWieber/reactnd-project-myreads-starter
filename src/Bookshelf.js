import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookGrid from './BookGrid';
import Shelf from './Shelf';

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
                <Shelf 
                  collection={currentlyReading}
                  updateBookLocation={updateBookLocation}
                  shelfBooks={shelfBooks}
                />
        
                <Shelf 
                  collection={wantToRead} 
                  updateBookLocation={updateBookLocation}
                  shelfBooks={shelfBooks} 
                />
         
                <Shelf 
                  collection={booksRead} 
                  updateBookLocation={updateBookLocation}
                  shelfBooks={shelfBooks} 
                />
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