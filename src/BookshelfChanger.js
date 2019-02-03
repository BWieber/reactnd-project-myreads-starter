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
        const { updateBookLocation, book} = this.props;
        const selectValue = event.target.value;

        updateBookLocation(book, selectValue);
        this.setState({ value: selectValue });
    }

    render() {
        const { book, shelfBooks } = this.props;
        const bookOnShelf = shelfBooks.find((b) => b.id === book.id);
        const shelfType = bookOnShelf ? bookOnShelf.shelf : 'none';

        return (
            <div className="book-shelf-changer">
                <select value={shelfType} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfChanger