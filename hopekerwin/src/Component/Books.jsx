import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import Book from "./Book";
import "./Books.css";

const Books = () => {
  const initialBooks = [
    {
      title: "Book One",
      author: "Author One",
      dueDate: "2023-12-01",
      status: "Checked Out",
    },
    {
      title: "Book Two",
      author: "Author Two",
      dueDate: "2023-12-05",
      status: "Checked Out",
    },
    {
      title: "Book Three",
      author: "Author Three",
      dueDate: "2023-12-10",
      status: "Available",
    },
    {
      title: "Book Four",
      author: "Author Four",
      dueDate: "2023-12-15",
      status: "Checked Out",
    },
    {
      title: "Book Five",
      author: "Author Five",
      dueDate: "2023-12-20",
      status: "Available",
    },
    {
      title: "Book Six",
      author: "Author Six",
      dueDate: "2023-12-25",
      status: "Checked Out",
    },
    {
      title: "Book Seven",
      author: "Author Seven",
      dueDate: "2023-12-30",
      status: "Available",
    },
    {
      title: "Book Eight",
      author: "Author Eight",
      dueDate: "2024-01-05",
      status: "Checked Out",
    },
    {
      title: "Book Nine",
      author: "Author Nine",
      dueDate: "2024-01-10",
      status: "Available",
    },
    {
      title: "Book Ten",
      author: "Author Ten",
      dueDate: "2024-01-15",
      status: "Checked Out",
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleStatus = (index) => {
    const updatedBooks = books.map((book, i) => {
      if (i === index) {
        return {
          ...book,
          status: book.status === "Checked Out" ? "Available" : "Checked Out",
          dueDate:
            book.status === "Checked Out"
              ? ""
              : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
                  .toISOString()
                  .split("T")[0],
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="books-container">
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <table className="books-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <Book
              key={index}
              index={index}
              book={book}
              handleToggleStatus={handleToggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;

