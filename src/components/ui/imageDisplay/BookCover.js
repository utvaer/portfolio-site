import React from "react";
import book from "../../../img/book.jpeg";
import styles from "./BookCover.module.css";

function BookCover() {
  return (
    <div>
      <img className={styles.book} src={book} alt="book cover" />
    </div>
  );
}

export default BookCover;
