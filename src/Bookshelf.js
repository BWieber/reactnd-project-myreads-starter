import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

        const shelves = [
          { displayName: 'Currently Reading', objectName: currentlyReading },
          { displayName: 'Want To Read', objectName: wantToRead },
          { displayName: 'Read', objectName: booksRead }
        ]

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map((shelf) => (
                  <Shelf
                    collection={shelf.objectName}
                    updateBookLocation={updateBookLocation}
                    shelfBooks={shelfBooks}
                    shelfType={shelf.displayName}
                  />
                ))}
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