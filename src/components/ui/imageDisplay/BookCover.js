import React from "react";
import book from "../../../img/book.jpeg";
import styles from "./BookCover.module.css";

function BookCover() {
  return (
    <>
      <a
        href="https://www.universitetsforlaget.no/unge-muslimske-stemmer"
        target="_blank"
        rel="noreferrer"
        className={styles.bookLink}
      >
        <img className={styles.book} src={book} alt="book cover" />
        <p>Unge muslimske stemmer. Om tro og ekstremisme</p>
      </a>
    </>
  );
}

export default BookCover;
