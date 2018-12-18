import React, { Component } from 'react';

class BookshelfChanger extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: this.props.book.shelf 
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const { updateBookLocation, book, shelfBooks } = this.props;

        const bookOnShelf = shelfBooks.find((b) => b.id === book.id);

        const shelfType = bookOnShelf ? bookOnShelf.shelf : 'none';

        return (
            <div className="book-shelf-changer">
                <select value={shelfType} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option onClick={() => updateBookLocation(book, 'currentlyReading')} value="currentlyReading">Currently Reading</option>
                    <option onClick={() => updateBookLocation(book, 'wantToRead')} value="wantToRead">Want to Read</option>
                    <option onClick={() => updateBookLocation(book, 'read')} value="read">Read</option>
                    <option onClick={() => updateBookLocation(book, 'none')} value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfChanger