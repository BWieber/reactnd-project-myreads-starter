import React, { Component } from 'react';
import BookGrid from './BookGrid';

class Shelf extends Component {
  render() {
    const { collection, updateBookLocation, shelfBooks } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <BookGrid
            collection={collection}
            updateBookLocation={updateBookLocation}
            shelfBooks={shelfBooks}
          />
        </div>
      </div>
    )
  }
}

export default Shelf