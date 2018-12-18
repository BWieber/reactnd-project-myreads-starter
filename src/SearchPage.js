import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import BookshelfChanger from './BookshelfChanger';

class SearchPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        query: '',
        books: []
      }

      this.updateQuery = this.updateQuery.bind(this);
    }

    updateQuery = (query) => {
      const trimmedQuery = query.trim();

      this.setState({ query: trimmedQuery })

      if(query === '') {
        this.setState({ books: [] })
      } else {
        BooksAPI.search(trimmedQuery).then((books) => {
          // books.forEach((book) => {
          //   var bookIsOnShelf = shelfBooks.find((b) => book.id === b.id);

          //   if (bookIsOnShelf !== undefined) {
          //     book.shelf = bookIsOnShelf.shelf;
          //   } else {
          //     book.shelf = 'none';
          //   }
          // })

          this.setState({ books })
        })
      }
    }

    clearQuery = () => {
      this.setState({ query: '' })
    }

    render() {
        const { query, books } = this.state;
        const { shelfBooks, updateBookLocation } = this.props;

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                to="/"
              > <button className="close-search">Close</button> </Link>

              
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {books.length > 0 && (
                books.map((book) => 
                <li key={book.id}>
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
                 </li>
                )
              )}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage