import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/DetailBook.css";
import { Rate } from "antd";
// import { Rate } from "antd";
function DetailBook() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("selectedBook"));
    if (storedBooks) {
      const selectedBook = storedBooks.filter((book) => book._id === id);
      if (selectedBook) {
        setData(selectedBook);
      }
    }
  }, [id]);

  return (
    <div className="Detail_book">
      {data.map((book) => (
        <div key={book._id} className="book-container">
          <div className="book-image">
            <img className="img" src={book.image} alt={book.title} />
          </div>
          <div className="book-info">
            <div className="Detail_book_name">{book.title}</div>
            <div className="Detail_book_author">
              Tác giả : <p className="right">{book.author}</p>
            </div>
            <div className="Detail_book_author">
              Thể loại : <p className="right">{book.category}</p>
            </div>
            <div className="Detail_book_author">
              Đánh giá : <Rate allowHalf disabled defaultValue={book.rate} />
            </div>
            <div className="Detail_book_author">
              Tóm tắt nội dung : <p>Light Novel</p>
            </div>
            <div className="button-container">
              <button className="follow-button">Theo dõi</button>
              <div>
                <button className="read-button">Đọc từ đầu</button>
                <button className="read-button">Đọc tiếp</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailBook;
