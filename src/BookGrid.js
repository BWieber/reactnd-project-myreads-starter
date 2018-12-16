import React, { Component } from 'react';
import BookshelfChanger from './BookshelfChanger';

class BookGrid extends Component {
    render() {
        const { collection, updateBookLocation } =  this.props;

        return (
            <ol className="books-grid">
              {collection.length > 0 && (
              collection.map((book) =>
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                        <BookshelfChanger updateBookLocation={updateBookLocation} book={book} />
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
        )
    }
}

export default BookGrid