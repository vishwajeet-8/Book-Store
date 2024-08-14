import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete("http://localhost:3000/books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h4>{book.title}</h4>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button
              className="delete"
              onClick={() => {
                handleDelete(book.id);
              }}
            >
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add New Book</Link>
      </button>
    </div>
  );
}
