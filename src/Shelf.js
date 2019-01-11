import React, { Component } from 'react';
import BookGrid from './BookGrid';

class Shelf extends Component {
  render() {
    const { collection, updateBookLocation, shelfBooks, shelfType } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {shelfType} </h2>
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