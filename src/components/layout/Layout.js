import React from "react";
import Footer from "./footer/Footer";
import MainNav from "./mainNav/MainNav";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <MainNav />
      <main className={styles.layout}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
