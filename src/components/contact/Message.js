import React from "react";
import styles from "./Message.module.css";

function Message() {
  return (
    <>
      <p className={styles.message}>
        Thanks for your message, you will hear back from me soon!
      </p>
    </>
  );
}

export default Message;
