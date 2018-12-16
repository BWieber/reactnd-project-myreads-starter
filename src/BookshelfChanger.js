import React, { Component } from 'react';

class BookshelfChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { updateBookLocation, book } = this.props;

        const shelfType = book.shelf === undefined ? 'none' : book.shelf;

        console.log(book.shelf);

        return (
            <div className="book-shelf-changer">
                <select value={shelfType} >
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