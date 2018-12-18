import React, { Component } from 'react';
import BookshelfChanger from './BookshelfChanger';

class Book extends Component {
  render() {
    const { book, updateBookLocation, shelfBooks } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
          <BookshelfChanger
            updateBookLocation={updateBookLocation}
            book={book}
            shelfBooks={shelfBooks}
          />
        </div>

        <div className="book-title"> {`${book.title}`} </div>
        <div className="book-authors">
          {book.authors}
        </div>
      </div>
    )
  }
}

export default Book