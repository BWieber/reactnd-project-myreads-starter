import React, { Component } from 'react';
import BookGrid from './BookGrid';

class Shelf extends Component {
  render() {
    const { collectionType, updateBookLocation, shelfBooks, shelfType } = this.props;

    const filteredBooks = shelfBooks.filter((book) => book.shelf === collectionType)

    console.log(filteredBooks);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {shelfType} </h2>
        <div className="bookshelf-books">
          <BookGrid
            collection={filteredBooks}
            updateBookLocation={updateBookLocation}
            shelfBooks={shelfBooks}
          />
        </div>
      </div>
    )
  }
}

export default Shelf