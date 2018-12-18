import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Book from './Book';

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
                  <Book 
                    updateBookLocation={updateBookLocation}
                    book={book}
                    shelfBooks={shelfBooks}
                  />
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