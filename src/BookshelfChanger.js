import React, { Component } from 'react';

class BookshelfChanger extends Component {
    render() {
        const { updateBookLocation, book } = this.props;

        return (
            <div className="book-shelf-changer">
                <select>
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