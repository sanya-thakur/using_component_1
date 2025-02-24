// write the book component code here
import React from "react";

const BookCard=({book})=>{
    return(
        <div className="book-card">
            <img src={book.image}  alt={book.name} className="book-image"></img>
            <h2>{book.name}</h2>
            <p><strong>Author:</strong>{book.author}</p>
            <p><strong>Genre:</strong>{book.genre}</p>
        </div>
    );
};

export default BookCard;