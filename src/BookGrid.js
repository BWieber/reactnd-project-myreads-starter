import React, { Component } from 'react';
import Book from './Book';

class BookGrid extends Component {
    render() {
        const { collection, updateBookLocation, shelfBooks } = this.props;

        return (
            <ol className="books-grid">
              {collection.length > 0 && (
              collection.map((book) =>
                <li key={book.id}>
                  <Book 
                    updateBookLocation={updateBookLocation}
                    book={book}
                    shelfBooks={shelfBooks}
                  />
                </li>
                )
              )}
            </ol>
        )
    }
}

export default BookGrid